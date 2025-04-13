document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll("li");
    services.forEach(service => {
        service.addEventListener("click", () => {
            alert(`You selected: ${service.textContent}`);
        });
    });
});