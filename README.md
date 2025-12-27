# 🎂 Birthday Tribute Website

A charming, responsive single-page web application designed to celebrate a special person's birthday. It features a live "time since birth" counter, a profile section, and an interactive memory gallery.

## ✨ Features

- **Live Life Timer:** A real-time counter that calculates the exact years, months, days, hours, minutes, and seconds since the individual's birth date.
- **Memory Lane Gallery:** A responsive grid of images that highlights special moments through the years.
- **Interactive Lightbox:** Clicking any gallery image opens a full-screen modal with a year caption.
- **Fully Responsive:** Optimized for both desktop and mobile devices using CSS Grid and Flexbox.
- **Soft Aesthetic:** Uses a warm, celebratory color palette (pinks and whites) with clean typography.

## 📁 Project Structure

```text
├── index.html      # Main HTML5 structure and SEO meta tags
├── style.css       # Custom CSS with CSS Variables and Media Queries
├── script.js       # Main logic (Timer, Gallery rendering, Modal)
└── db/
    └── data.json   # Configuration file containing personal details

```

## 🚀 How It Works

1. **Data-Driven:** The website is populated dynamically. On load, `script.js` fetches data from `./db/data.json`.
2. **The Timer:** The `updateTimer` function uses the Date object to calculate the difference between the "Date of Birth" and "Now," including logic to handle month/day borrowing for accuracy.
3. **The Gallery:** Images are rendered dynamically from the JSON file, supporting lazy loading for better performance.

## 🛠️ Setup & Customization

To personalize this project for someone else, you only need to modify the **`db/data.json`** file (create this file if it's not already in your folder):

```json
{
  "name": "Poushali",
  "dob": "1998-10-25T08:30:00",
  "mainImage": "path/to/profile.jpg",
  "gallery": [
    { "url": "path/to/photo1.jpg", "year": "2015" },
    { "url": "path/to/photo2.jpg", "year": "2023" }
  ]
}
```

### Development

Since the project uses `fetch()` and `type="module"` in the script tag, you must run it using a local server (like the VS Code **Live Server** extension) to avoid CORS policy errors.

## 🎨 Credits

- **Fonts:** [Fredoka](https://fonts.google.com/specimen/Fredoka) and [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts.
- **Reset:** [Normalize.css](https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css).

---
