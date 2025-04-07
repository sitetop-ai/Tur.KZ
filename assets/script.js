document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".comments-item");
    const indicators = document.querySelectorAll(".indicator");

    let currentIndex = 1; // Начинаем со второго элемента
    const totalItems = items.length;

    function updateSlider() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.transform = "scale(1)";
                item.style.opacity = "1";
            } else {
                item.style.transform = "scale(0.8)";
                item.style.opacity = "0.4";
            }
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    // Обработчик кликов по индикаторам
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();
});
