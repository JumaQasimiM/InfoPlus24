// show date

// get all elements with class date
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
const day = now.getDay();
// times
const h = now.getHours();
const m = now.getMinutes();

const today = new Date().toLocaleDateString();

// insert date
dates.forEach((el) => {
  //   el.textContent = today;
  el.textContent = month + "-" + day + "-" + year;
});

// insert times
times.forEach((el) => {
  el.textContent = "Today - " + h + ":" + m;
});

// show wedios

const video_list_container = document.getElementById("video_contanier");
const video_title = document.getElementById("video_title");
const videos = ["yqQCyWjgyZU", "i4iO93NvwRo", "i4iO93NvwRo"];

const video = [
  { id: "yqQCyWjgyZU", title: "" },
  { id: "i4iO93NvwRo", title: "" },
];
const titles = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing.Lorem ipsum dolor sit amet ",
  "Lorem ipsum dolor sit amet consectetur, adipisicing.Lorem ipsum dolor sit amet consectetur, adipisicing.",
];

videos.forEach((id) => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.className = "w-full my-4 h-30 border";
  iframe.allowFullscreen = true;
  video_list_container.appendChild(iframe);
});

titles.forEach((title) => {
  const p = document.createElement("p");
  p.className = "text-gray-500 font-semibold";
  video_title.appendChild(p);
  p.textContent = title;
});
