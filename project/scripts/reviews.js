document.addEventListener("DOMContentLoaded", () => {
    console.log("Reviews are ready to be explored!");
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;