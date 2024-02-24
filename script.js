document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    let currentScreenSize = getScreenSize();

    function getRandomPosition(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function getScreenSize() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1200) {
            return "xl";
        } else if (screenWidth >= 1100) {
            return "lg";
        } else if (screenWidth >= 1000) {
            return "md";
        } else if (screenWidth >= 768) {
            return "sm";
        } else if (screenWidth >= 600) {
            return "xs";
        } else if (screenWidth >= 500) {
            return "xxs";
        } else if (screenWidth >= 400) {
            return "xxx";
        } else if (screenWidth >= 300) {
            return "xxxx";
        } else {
            return "default";
        }
    }

    function setRandomPosition() {
        const newScreenSize = getScreenSize();

        if (newScreenSize !== currentScreenSize) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const randomLeft = getRandomPosition(screenWidth - 200); // Adjust 200 to the width of your image
            const randomTop = getRandomPosition(screenHeight - 200); // Adjust 200 to the height of your image

            imageContainer.style.left = `${randomLeft}px`;
            imageContainer.style.top = `${randomTop}px`;

            currentScreenSize = newScreenSize;
        }
    }

    setRandomPosition(); // Set random position on page load

    window.addEventListener("resize", setRandomPosition);
});

