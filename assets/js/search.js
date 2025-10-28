// search news
const search_btn = document.getElementById("search_form");

search_btn.addEventListener("submit", async function (event) {
  // aviod form auto refresh
  event.preventDefault();

  const form = event.target;
  //   get all input filed
  const form_data = new FormData(form);
  const query = form_data.get("search").trim().toLowerCase();

  if (!query) {
    alert("Bitte füllen Sie das Formular aus!");
    return;
  }

  const show_resault = document.getElementById("show_resault");
  show_resault.innerHTML = ` 
  <div class="flex flex-col md:w-1/2 bg-gray-100 mx-auto p-5 items-center">
    <div class="loader"></div>
    <p class='text-xl text-gray-500 mt-2'>Lade Daten...</p>
  </div>
`;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // filter
    const filtered = posts.filter((p) => p.title.toLowerCase().includes(query));

    if (filtered.length === 0) {
      show_resault.innerHTML = `
      <div class="flex flex-col md:w-1/2 bg-gray-100 mx-auto p-5 items-center">
    
    <p class='text-xl text-gray-500 mt-2'>Oops! Nothing found 😌</p>
  </div>
      `;
      return;
    }

    show_resault.innerHTML = filtered
      .map(
        (p) =>
          `
        <div class="flex flex-col md:w-1/2 bg-gray-100 mx-auto p-5">
        <button id='close' class='py-2 px-4 border-none bg-orange-500 w-[65px] rounded m-4'>Close</button>
            <div class='flex flex-col group'>
                <img
                    src="assets/images/news.jpg"
                    alt=""
                    class="group-hover:border-orange-600 group-hover:border-b-3 transition duration-200"
                />
            
                <div class="my-2">
                    <h2
                        class="text-xl font-bold group-hover:text-orange-600 transition duration-200"
                    >
                        ${p.title}
                    </h2>
                    <p class="my-2">
                        ${p.body}
                    </p>
                
                </div>
            </div>
            
        </div>
        
        `
      )
      .join("");
  } catch (error) {
    show_resault.innerHTML = "Unable to catch the data!" + error.message;
  }

  const close = document.getElementById("close");
  close.addEventListener("click", function () {});
});
