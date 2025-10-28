// fetch data api

async function FetchData(postCount) {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=";
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

    let posts = "";
    resualt.forEach((element) => {
      posts += `
    <div class='flex flex-col border-b-3 border-b-gray-300 hover:border-b-gray-600 group'>
        <img
            src="assets/images/news.jpg"
            alt=""
            class="group-hover:border-orange-600 group-hover:border-b-3 transition duration-200"
        />
       
        <div class="my-2">
            <h2
                class="text-xl font-bold group-hover:text-orange-600 transition duration-200"
            >
                ${element.title}
            </h2>
            <p class="my-2">
                ${element.body}
            </p>
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
