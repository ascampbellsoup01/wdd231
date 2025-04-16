const currentVisit = Date.now();

const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `<div class="visit-message">Welcome! Let us know if you have any questions.</div>`
    );
} else {
    const daysBetweenVisits = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));

    let message = "";
    if (daysBetweenVisits < 1) {
        message = "Back so soon! Awesome!";
    } else {
        const dayText = daysBetweenVisits === 1 ? "day" : "days";
        message = `You last visited ${daysBetweenVisits} ${dayText} ago.`;
    }
    document.body.insertAdjacentHTML(
        "afterbegin",
        `<div class="visit-message">${message}</div>`
    );
}

localStorage.setItem("lastVisit", currentVisit);

document.getElementById("copyright").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;