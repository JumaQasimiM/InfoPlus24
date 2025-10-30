// fetch data api
function showUser() {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  // console.log(userData.username);
  console.log("Welcome dear: " + userData.username);
  // alert("Welcome dear: " + userData.username);
}

// fetch posts form api

async function FetchData(postCount) {
  const url = "https://dummyjson.com/posts?limit=";

  //   get time
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();

  try {
    const response = await fetch(url + postCount);

    if (!response.ok) {
      throw new Error("Response Status:", response.status);
    }

    //   chnage in to json format
    const resualt = await response.json();
    console.log(resualt);
    // const slug =
    let posts = "";
    resualt.posts.forEach((post) => {
      // create slug
      const news_title = post.title;
      const slug = news_title.toLowerCase().split(" ").join("-");
      console.log(slug);

      posts += `
    <div class='flex flex-col border-b-3 border-b-gray-300 hover:border-b-gray-600 group'>
      <a href='news.html?slug=${slug}'>  
        <img
              src='https://picsum.photos/seed/${post.id}/400/300'
              alt=""
              class="group-hover:border-orange-600 group-hover:border-b-3 transition duration-200"
          />
        </a>
       
        <div class="my-2">
            <h2
                class="text-xl font-bold group-hover:text-orange-600 transition duration-200"
            >
               <a href='news.html?slug=${slug}'> ${post.title}</a>
            </h2>
            <p class="my-2">
                ${post.body}
            </p>
            <div class='tags'>${post.tags.join(", ")} </div>


            <div class='flex justify-around'><div>${
              post.reactions.likes
            } <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <div>
            ${post.reactions.dislikes}<i class="fa-solid fa-thumbs-down"></i> 
            </div>
            </div>



            <p class="time font-semibold text-gray-500 mb-4">
            ${"Today - " + h + ":" + m}
            </p>
        </div>
    </div>
    `;
    });
    return (document.getElementById("card").innerHTML = posts);
  } catch (error) {
    console.log("Error :", error);
  }
}
