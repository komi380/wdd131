// Get the current count from localStorage or start at 0
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase count by one
reviewCount++;

// Save the new count
localStorage.setItem("reviewCount", reviewCount);

// Display it
document.getElementById("reviewCount").textContent = reviewCount;

// Display last modification date
document.getElementById("lastModified").textContent = document.lastModified;
