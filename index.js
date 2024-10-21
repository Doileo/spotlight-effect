"use strict";

// Select all grid items and the spotlight element
const gridItems = document.querySelectorAll(".grid-item");
const spotlights = document.querySelectorAll(".spotlight");

// Function to position the spotlight based on mouse movement
function updateSpotlight(e) {
  const x = e.clientX;
  const y = e.clientY;

  gridItems.forEach((item) => {
    const spotlight = item.querySelector(".spotlight");
    const rect = item.getBoundingClientRect();

    // Check if the mouse is within the grid item
    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      spotlight.style.left = `${x - rect.left - 50}px`; // Center the spotlight
      spotlight.style.top = `${y - rect.top - 50}px`; // Center the spotlight
      spotlight.style.width = "220px";
      spotlight.style.height = "220px";
    } else {
      spotlight.style.width = "0"; // Hide spotlight when not hovered
      spotlight.style.height = "0";
    }
  });
}

// Add mouse move event listener to the document
document.addEventListener("mousemove", updateSpotlight);

// Accessibility: ensure focus is indicated for each grid item
gridItems.forEach((item) => {
  item.addEventListener("focus", () => {
    item.classList.add("focused");
    item.querySelector(".spotlight").style.width = "220px"; // Show spotlight on focus
    item.querySelector(".spotlight").style.height = "220px";
  });

  item.addEventListener("blur", () => {
    item.classList.remove("focused");
    item.querySelector(".spotlight").style.width = "0"; // Hide spotlight on blur
    item.querySelector(".spotlight").style.height = "0";
  });
});
