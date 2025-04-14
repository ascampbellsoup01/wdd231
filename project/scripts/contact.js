document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message!");
    });
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;