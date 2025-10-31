// 1. Show and check location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
getLocation();

// 2. Show date and time
const dates = document.querySelectorAll(".date");
const times = document.querySelectorAll(".time");

const now = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const year = now.getFullYear();
const month = months[now.getMonth()];
const day = now.getDate(); // day of the month
const h = now.getHours().toString().padStart(2, "0");
const m = now.getMinutes().toString().padStart(2, "0");

dates.forEach((el) => (el.textContent = `${month}-${day}-${year}`));
times.forEach((el) => (el.textContent = `Today - ${h}:${m}`));

// 3. Show videos
const video_list_container = document.getElementById("video_contanier");
const video_title_container = document.getElementById("video_title"); // make sure it exists in HTML

const videos = [
  { id: "yqQCyWjgyZU", title: "First Video Title" },
  { id: "i4iO93NvwRo", title: "Second Video Title" },
  { id: "i4iO93NvwRo", title: "Third Video Title" },
];

videos.forEach((video) => {
  // create iframe
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${video.id}`;
  iframe.className = "w-full my-4 h-64 border"; // fixed height
  iframe.allowFullscreen = true;
  video_list_container.appendChild(iframe);

  // create title
  if (video_title_container) {
    const p = document.createElement("p");
    p.className = "text-gray-500 font-semibold mb-2";
    p.textContent = video.title;
    video_title_container.appendChild(p);
  }
});

// swiper hero section
