// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", scrollToSection);
    }

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        }
    }
});

