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
              class="transition duration-200"
          />
        </a>
       
        <div class="my-2">
            <h2
                class="text-xl font-bold group-hover:text-orange-600 transition duration-200"
            >
               <a href='news.html?slug=${slug}'> ${post.title}</a>
            </h2>
            <p class="my-2">
                ${post.body.slice(0, 100)} 
                <a href='news.html?slug=${slug}' class='text-red-600 underline font-semibold'>read more</a>
            </p>
            <div class='tags flex gap-2'>
           
            ${post.tags
              .map(
                (t) =>
                  `<span class='text-white rounded-md px-1 cursor-pointer bg-orange-500'>${t} </span> `
              )
              .join("")}
      
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
