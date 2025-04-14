document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll("li");
    services.forEach(service => {
        service.addEventListener("click", () => {
            alert(`You selected: ${service.textContent}`);
        });
    });
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;