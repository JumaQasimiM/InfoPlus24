// create title for page
function page_title() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("slug");
  return title ? decodeURIComponent(title.replace(/-/g, " ")) : "Home";
}

// Set the page title dynamically
document.title = `InfoPlus24 | ${page_title()}`;

// ================= news section ==================

const news_detail_div = document.getElementById("new_detail");

async function load_news_detail() {
  // Get today's date (formatted)
  const now = new Date();
  const today = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;

  // get slug form url
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const title = slug.split("-").join(" ");
  console.log("Searching for:", title);

  // fetch post data form api
  const response = await fetch(`https://dummyjson.com/posts/search?q=${title}`);
  const data = await response.json();

  // check if found data
  if (!data.posts || data.posts.length === 0) {
    news_detail_div.innerHTML = `<p class="text-center text-gray-500 text-xl py-10">No matching post found 😕</p>`;
    return;
  }

  const post = data.posts[0];
  // console.log(post);

  // fetch author data
  const author_response = await fetch(
    `https://dummyjson.com/users/${post.userId}`
  );
  const author = await author_response.json();

  // create image for posts
  const image = `https://picsum.photos/seed/${post.id}/800/400`;

  news_detail_div.innerHTML = `
    <article class="max-w-[1300px] mx-auto bg-white rounded shadow-lg overflow-hidden my-8">
      <img src="${image}" alt="${
    post.title
  }" class="w-[70%] h-[400px] mx-auto object-cover my-3">

      <div class="p-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-3">${post.title}</h1>
        <div class="flex items-center gap-3 mb-4">
          <img src="${author.image}" alt="${
    author.firstName
  }" class="w-10 h-10 rounded-full border">
          <div>
            <p class="font-semibold text-gray-800">${author.firstName} ${
    author.lastName
  }</p>
            <p class="text-sm text-gray-500">${today}</p>
          </div>
        </div>

        <p class="text-gray-700 leading-relaxed mb-4">${post.body}</p>

        <div class="flex flex-wrap gap-2 mb-4">
          ${post.tags
            .map(
              (t) =>
                `<span class="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">${t}</span>`
            )
            .join("")}
        </div>

        <div class="flex items-center justify-between text-gray-600 text-lg border-t pt-4 mt-4">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <span>${post.views} views</span>
          </div>
          <div class="flex items-center gap-6">
            <span class="flex items-center gap-1 text-green-600">
              <i class="fa-solid fa-thumbs-up"></i> ${post.reactions.likes}
            </span>
            <span class="flex items-center gap-1 text-red-600">
              <i class="fa-solid fa-thumbs-down"></i> ${post.reactions.dislikes}
            </span>
          </div>
        </div>
      </div>
    </article>
  `;
}

load_news_detail();
