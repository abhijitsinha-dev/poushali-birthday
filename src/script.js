// script.js

// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', () => {
  // 1. Fetch JSON data containing website content
  fetch('./db/data.json')
    .then((response) => response.json())
    .then((data) => {
      // Initialize website with fetched data
      initializeWebsite(data);
    })
    .catch((error) => console.error('Error loading data:', error));
});

// Main function to initialize all website components
function initializeWebsite(data) {
  // --- Section 1: Header & Profile ---
  // Set birthday message with person's name
  document.getElementById(
    'birthday-msg'
  ).innerText = `Happy Birthday ${data.name}`;

  // Set main profile image
  document.getElementById('main-photo').src = data.mainImage;

  // --- Section 1: Timer Logic ---
  // Create Date object from date of birth
  const dob = new Date(data.dob);

  // Update timer immediately and then every second
  updateTimer(dob);
  setInterval(() => updateTimer(dob), 1000);

  // --- Section 2: Gallery Logic ---
  const galleryContainer = document.getElementById('gallery');

  // Loop through gallery items and create HTML elements
  data.gallery.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
            <img src="${item.url}" alt="Memory from ${item.year}" loading="lazy">
            <div class="overlay">
                <span class="year-text">${item.year}</span>
            </div>
        `;

    // Add click event to open modal when gallery item is clicked
    div.addEventListener('click', () => openModal(item.url, item.year));
    galleryContainer.appendChild(div);
  });
}

// Function to calculate and display time since birth
function updateTimer(dob) {
  const now = new Date();

  // Calculate raw difference between current date and date of birth
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  let hours = now.getHours() - dob.getHours();
  let minutes = now.getMinutes() - dob.getMinutes();
  let seconds = now.getSeconds() - dob.getSeconds();

  // Adjust for negative values using borrowing logic

  // Adjust seconds if negative
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  // Adjust minutes if negative
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  // Adjust hours if negative
  if (hours < 0) {
    hours += 24;
    days--;
  }

  // Adjust days if negative (consider days in previous month)
  if (days < 0) {
    // Get days in the previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }

  // Adjust months if negative
  if (months < 0) {
    months += 12;
    years--;
  }

  // Update timer display with calculated values
  const timerContainer = document.getElementById('timer');
  timerContainer.innerHTML = `
        <div class="time-box"><span class="time-val">${years}</span><span class="time-label">Years</span></div>
        <div class="time-box"><span class="time-val">${months}</span><span class="time-label">Months</span></div>
        <div class="time-box"><span class="time-val">${days}</span><span class="time-label">Days</span></div>
        <div class="time-box"><span class="time-val">${hours}</span><span class="time-label">Hours</span></div>
        <div class="time-box"><span class="time-val">${minutes}</span><span class="time-label">Minutes</span></div>
        <div class="time-box"><span class="time-val">${seconds}</span><span class="time-label">Seconds</span></div>
    `;
}

// --- Modal Logic ---
// Get DOM elements for modal functionality
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

// Function to open modal with clicked image
function openModal(src, year) {
  modal.style.display = 'flex';
  modalImg.src = src;
  captionText.innerText = year;
}

// Close modal when close button is clicked
closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// Close modal when clicking outside the image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
