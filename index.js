"use strict";

// Select all grid items and the spotlight element
const gridItems = document.querySelectorAll(".grid-item");

// Function to position the spotlight based on mouse movement
function updateSpotlight(e) {
  const x = e.clientX;
  const y = e.clientY;

  gridItems.forEach((item) => {
    const spotlight = item.querySelector(".spotlight");
    const rect = item.getBoundingClientRect();

    // Check if the mouse is within the grid item
    const isHovered =
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

    // Set styles based on whether the item is hovered
    if (isHovered) {
      spotlight.style.left = `${x - rect.left - 50}px`; // Center spotlight
      spotlight.style.top = `${y - rect.top - 50}px`; // Center spotlight
      spotlight.classList.add("visible"); // Show spotlight
    } else {
      spotlight.classList.remove("visible"); // Hide spotlight
    }
  });
}

// Debounce function to limit how often updateSpotlight is called
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Add mouse move event listener to the document with debounce
document.addEventListener("mousemove", debounce(updateSpotlight, 20));

// Accessibility: ensure focus is indicated for each grid item
gridItems.forEach((item) => {
  item.addEventListener("focus", () => {
    item.classList.add("focused");
    const spotlight = item.querySelector(".spotlight");
    spotlight.classList.add("visible"); // Show spotlight on focus
  });

  item.addEventListener("blur", () => {
    item.classList.remove("focused");
    const spotlight = item.querySelector(".spotlight");
    spotlight.classList.remove("visible"); // Hide spotlight on blur
  });
});
