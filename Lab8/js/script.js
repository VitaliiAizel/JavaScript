document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const menu = document.getElementById("menu");

    hamburgerBtn.addEventListener("click", function () {
        menu.classList.toggle("open");
    });

    const carouselSlides = document.getElementById("slides");
    const slideQuantity = slides.childElementCount;
    let currentSlide = 0;
    let timer = 0;

    const indicators = document.getElementById("indicators");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    for (let i = 0; i < slideQuantity; i++) {
        const indicatorArea = document.createElement("div");
        indicatorArea.classList.add("indicator");
        indicatorArea.addEventListener("click", function () {
            currentSlide = i;
            slideIndex(0);
        });

        indicators.appendChild(indicatorArea);
    }

    const slideIndex = function (currIndex, isReverse) {
        const slideIndicators = document.getElementsByClassName("indicator");
        currentSlide += currIndex;

        if (currentSlide >= slideQuantity)
            currentSlide--;
        if (currentSlide < 0)
            currentSlide++;
        if (currentSlide === slideQuantity - 1)
            isReverse = true;
        if (currentSlide === 0)
            isReverse = false;

        carouselSlides.scroll({
            left: (carouselSlides.scrollWidth / slideQuantity) * currentSlide + 1,
            behavior: "smooth"
        });

        for (let i = 0; i < slideIndicators.length; i++)
            slideIndicators[i].classList.remove("active");
        slideIndicators[currentSlide].classList.add("active");

        clearInterval(timer);
        timer = setInterval(function () {
            if (isReverse)
                slideIndex(-1, isReverse);
            else
                slideIndex(1, isReverse);
        }, 3000);
    };

    if (next)
        next.addEventListener("click", function () {
            slideIndex(1);
        });

    if (prev)
        prev.addEventListener("click", function () {
            slideIndex(-1);
        });

    slideIndex(0, false);
});

(function (global) {
    function setScreenSizeClass() {
        const width = global.innerWidth;
        const Large = document.querySelectorAll(".Large");
        const Medium = document.querySelectorAll(".Medium");

        Large.forEach(function(element) {
            if (width >= 768) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });

        Medium.forEach(function(element) {
            if (width >= 768) {
                element.style.display = "none";
            } else {
                element.style.display = "block";
            }
        });
    }

    document.addEventListener("DOMContentLoaded", setScreenSizeClass);
    window.addEventListener("resize", setScreenSizeClass);
})(window);
