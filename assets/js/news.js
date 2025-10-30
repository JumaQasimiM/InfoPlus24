// news detail

const news_detail_div = document.getElementById("new_detail");

async function load_news_detail() {
  //   get date
  const now = new Date();
  const year = now.getFullYear();
  const monath = now.getMonth();
  const day = now.getDate();
  const today = day + "-" + monath + "-" + year;

  //   get data form url
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const title = slug.split("-").join(" ");
  console.log(title);
  const response = await fetch(`https://dummyjson.com/posts/search?q=${title}`);
  const data = await response.json();

  console.log(data); // Check structure

  // Make sure posts exist
  if (data.posts && data.posts.length > 0) {
    const post = data.posts[0];
    console.log(post.title);

    // Generate random image
    const image = `https://picsum.photos/seed/${post.id}/400/300`;
    // get author
    const author = await fetch(`https://dummyjson.com/users/` + post.userId);
    const author_data = await author.json();
    console.log(author_data);
    news_detail_div.innerHTML = `
      
      <div class='my-4 p-2 flex flex-col justify-center'>
      <div class=''>
        <div class='flex flex-col'>
        <img src=${author_data.image} class='w-[35px] h-[35px]'>
        <p class='text-2xl font-bold text-gray-500 font-semibold'> ${
          author_data.lastName
        }</p>
        </div>
        <p class='text-2xl font-bold text-gray-500'>Date<span class='font-semibold'> : ${today}</span></p>
        <p class='text-2xl font-bold text-gray-500'>News id : <span class='font-semibold'> ${
          post.id
        }</span></p>
        <p class='text-2xl font-bold'>${
          post.views
        } <i class="fa-solid fa-eye"></i></p>

      </div>
      <img src=${image} class='w-[70%] h-[420px] mx-auto '>
      <p class='text-2xl font-bold'>${post.title}</p>
      <p>${post.body}</p>

     ${post.tags.map((t) => `<p class='text-red-600'>${t}</p>`).join("")}
       <div class='flex justify-around'>
          <div>${post.reactions.likes} <i class="fa-solid fa-thumbs-up"></i>
          </div>
            <div>
               ${
                 post.reactions.dislikes
               }<i class="fa-solid fa-thumbs-down"></i> 
            </div>
        </div>



      </div>
    `;
  } else {
    console.log("No matching post found");
  }
}

load_news_detail();
