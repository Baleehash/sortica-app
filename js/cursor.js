// ==============================
// Custom Smooth Cursor (Fixed)
// ==============================
(function () {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  // Stop if elements not found
  if (!cursorDot || !cursorOutline) return;

  // Skip custom cursor on touch devices
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    document.body.style.cursor = "auto";
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;
  let hasMoved = false;

  // Mouse move event
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move the small dot instantly
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    // Show cursor on first movement
    if (!hasMoved) {
      cursorDot.classList.add("active");
      cursorOutline.classList.add("active");
      hasMoved = true;
    }
  });

  // Smooth outline follow animation
  function animateOutline() {
    const delay = 6; // smaller = faster follow
    outlineX += (mouseX - outlineX) / delay;
    outlineY += (mouseY - outlineY) / delay;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }

  animateOutline();

  // Hover effect for clickable elements
  const clickables = document.querySelectorAll("a, button, input, textarea, select, [role='button'], .cursor-pointer");

  clickables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });

  // Hide cursor when leaving the window
  document.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("active");
    cursorOutline.classList.remove("active");
  });

  // Show cursor again when re-entering
  document.addEventListener("mouseenter", () => {
    if (hasMoved) {
      cursorDot.classList.add("active");
      cursorOutline.classList.add("active");
    }
  });
})();
