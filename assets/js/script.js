if (
    localStorage.getItem('color-mode') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
     !localStorage.getItem('color-mode'))
    ) {
    document.documentElement.setAttribute('color-mode', 'dark')
}

window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.transform = 'translateY(' + scrolled * 0.25 + 'px)';
});

function toggleColorMode() {
    var currentMode = document.documentElement.getAttribute("color-mode");

    if (currentMode === "light") {
        document.documentElement.setAttribute("color-mode", "dark");
        localStorage.setItem("color-mode", "dark");
    } else {
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color-mode", "light");
    }
        document.documentElement.setAttribute("class", "themechange");
};

function themeChanged() {
    document.documentElement.removeAttribute("class", "themechange");
}

function handleKeyDown(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        toggleColorMode();
    }
}