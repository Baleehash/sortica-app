// ==============================
// Custom Smooth Cursor
// ==============================
(function() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (!cursorDot || !cursorOutline) return;

    // Check if device supports hover (not mobile)
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouchDevice) {
        document.body.style.cursor = 'auto';
        return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Show cursor after mouse move
    let hasM

oved = false;

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update dot position immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';

        // Show cursors on first move
        if (!hasMoved) {
            cursorDot.classList.add('active');
            cursorOutline.classList.add('active');
            hasMoved = true;
        }
    });

    // Smooth follow for outline
    function animateOutline() {
        // Smooth easing
        const delay = 6;

        outlineX += (mouseX - outlineX) / delay;
        outlineY += (mouseY - outlineY) / delay;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }

    animateOutline();

    // Hover effect on clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-pointer');

    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });

        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('active');
        cursorOutline.classList.remove('active');
    });

    // Show cursor when entering window
    document.addEventListener('mouseenter', () => {
        if (hasMoved) {
            cursorDot.classList.add('active');
            cursorOutline.classList.add('active');
        }
    });
})();
