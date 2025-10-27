# 📰 InfoPlus24

**InfoPlus24** is a modern, responsive news website built with **HTML**, **Tailwind CSS**, and **JavaScript**.  
It features the latest news, live updates, embedded videos, and social media integration — all styled with Tailwind for a clean, dynamic look.

---

## 🚀 Features

- 🧭 **Responsive Navbar** — Fully responsive navigation with category links (Home, Sports, Technology, Blog, etc.)
- 📰 **Latest News Section** — Dynamically fetched news articles from a free News API
- 🎥 **Watch Videos** — Embedded YouTube videos with custom titles and layout
- 💬 **Advertisement Marquee** — Scrollable text for promotions or important headlines
- 🌙 **Dark Mode Ready Icons** — Placeholder icons for future dark mode or user options
- 🧡 **Newsletter Subscription Form** — Collects email inputs (front-end only)
- 🌐 **Social Media Links** — Connect with Facebook, YouTube, Telegram, and more
- 🏁 **Footer Section** — Organized site links and copyright notice

---

## 🛠️ Technologies Used

| Technology               | Description                                |
| ------------------------ | ------------------------------------------ |
| **HTML5**                | For structure and layout                   |
| **Tailwind CSS (CDN)**   | For modern and responsive styling          |
| **Font Awesome 7**       | For icons and social media logos           |
| **JavaScript (Vanilla)** | For fetching live data and interactivity   |
| **News API**             | (Optional) For fetching real-time articles |

---

## 📂 Folder Structure

InfoPlus24/
│
├── index.html # Main HTML file
│
├── assets/
│ ├── css/
│ │ └── index.css # Custom CSS
│ ├── images/
│ │ └── news.jpg # Sample news image
│ └── js/
│ ├── index.js # Front-end scripts
│ └── fetchNews.js # Fetch data from API
│
└── README.md # Project documentation

---

## ⚙️ How to Use

### 1️⃣ Clone this repository

```bash
git clone https://github.com/yourusername/InfoPlus24.git
```

2️⃣ Open the project folder
cd InfoPlus24
3️⃣ Open index.html in your browser

You can simply drag and drop the file into your browser or use a local live

🌍 Adding a Free News API

You can use any of these free APIs:
| API | Free Tier | Documentation |
| -------------------------------------------- | ------------------ | ------------------------------ |
| [NewsAPI.org](https://newsapi.org) | 100 requests/day | Global, business, tech, etc. |
| [GNews.io](https://gnews.io) | 100 requests/day | General headlines & categories |
| [Mediastack](https://mediastack.com) | 500 requests/month | Real-time and historical news |
| [TheNewsAPI.com](https://www.thenewsapi.com) | Free plan | JSON news feeds |

Example (fetchNews.js):
async function FetchData(limit = 10) {
const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=${limit}&apikey=YOUR_API_KEY`;
const res = await fetch(url);
const data = await res.json();

const cardContainer = document.getElementById("card");
cardContainer.innerHTML = "";

data.articles.forEach(article => {
const card = `

<div class="bg-white shadow-md rounded-md overflow-hidden">
<img src="assets/images/news.jpg" alt="news" class="w-full h-48 object-cover">
<div class="p-4">
<h3 class="text-lg font-semibold mb-2">${posts.title}</h3>
          <p class="text-gray-600 mb-3">${posts.body || ""}</p>

        </div>
      </div>`;

cardContainer.innerHTML += card;
});
}

🧑‍💻 Developer

Mohammad Qasimi
💼 Front-End Developer | 🌍 Based on HTML, Tailwind, and JS
📧 Contact: youremail@example.com

📜 License

This project is open-source and available under the MIT License.
