const slidingWindow = document.querySelector('.sliding-window');
const threeDotBtn = document.querySelector('.threedot');
const closeBtn = document.querySelector('.close-btn');

threeDotBtn.addEventListener('click', () => {
    slidingWindow.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    slidingWindow.style.display = 'none';
});

// Smooth scroll to sections when links inside sliding window are clicked
slidingWindow.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        slidingWindow.style.display = 'none';
    });
});