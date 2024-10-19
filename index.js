"use strict";

// Select all grid items and the spotlight element
const gridItems = document.querySelectorAll(".grid-item");
const spotlights = document.querySelectorAll(".spotlight");

// Function to position the spotlight based on mouse movement
function updateSpotlight(e) {
  const x = e.clientX;
  const y = e.clientY;

  spotlights.forEach((spotlight) => {
    spotlight.style.left = `${x - 50}px`; // Center the spotlight
    spotlight.style.top = `${y - 50}px`; // Center the spotlight
  });
}

// Add mouse move event listener to the document
document.addEventListener("mousemove", updateSpotlight);

// Accessibility: ensure focus is indicated for each grid item
gridItems.forEach((item) => {
  item.addEventListener("focus", () => {
    item.classList.add("focused");
  });

  item.addEventListener("blur", () => {
    item.classList.remove("focused");
  });
});
