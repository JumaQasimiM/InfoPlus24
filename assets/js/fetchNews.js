import { FetchPosts } from "./api.js";
// Show logged-in user not compleete
function showUser() {
  const user = localStorage.getItem("user");
  if (!user) return;
  const userData = JSON.parse(user);
  console.log("Welcome dear: " + userData.username);
}

// Fetch posts from API and display
async function FetchData(postCount) {
  const url = `https://dummyjson.com/posts?limit=${postCount}`;

  // Get current time
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");

  try {
    const result = await FetchPosts(url);
    // have reasult  correct format or not
    if (!result || !Array.isArray(result.posts)) {
      throw new Error("Invalid API response");
    }

    // Build HTML for posts
    let postsHTML = result.posts
      .map((post) => {
        const slug = post.title.toLowerCase().split(" ").join("-");
        return `
      <div class='flex flex-col border-b-2 border-gray-300 hover:border-gray-600 transition group'>
        <a href='news.html?slug=${slug}' class='overflow-hidden rounded-lg'>
          <img
            src='https://picsum.photos/seed/${post.id}/400/300'
            alt='${post.title}'
            class='w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </a>
        <div class="my-3 px-1">
          <h2 class="text-xl font-bold group-hover:text-orange-500 transition duration-200">
            <a href='news.html?slug=${slug}'>${post.title}</a>
          </h2>
          <p class="my-2 text-gray-600">
            ${post.body.slice(0, 100)} 
          </p>
          <div class='tags flex gap-2 flex-wrap mt-2'>
            ${post.tags
              .map(
                (tag) =>
                  `<span class='text-white rounded-md px-2 py-1 cursor-pointer bg-orange-500 text-sm'>${tag}</span>`
              )
              .join("")}
          </div>
           <div
              class="flex justify-between items-center mt-4 text-sm text-gray-500"
            >
              <span><i class="fa-solid fa-clock mr-1"></i> Today - ${h}:${m}</span>
              <a
                href='news.html?slug=${slug}'
                class="text-orange-500 font-semibold hover:underline hover:text-orange-700"
                >Read More</a
              >
             
            </div>

        </div>
      </div>
      `;
      })
      .join("");

    document.getElementById("card").innerHTML = postsHTML;
  } catch (error) {
    console.error("Error fetching posts:", error);
    document.getElementById("card").innerHTML =
      "<p class='text-red-500'>Failed to load news. Please try again later.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => FetchData(10));
