document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;