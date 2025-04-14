const urlParams = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").textContent = urlParams.get("name") || "N/A";
    document.getElementById("email").textContent = urlParams.get("email") || "N/A";
    document.getElementById("message").textContent = urlParams.get("message") || "N/A";
    document.getElementById("timestamp").textContent = urlParams.get("timestamp") || "N/A";

    if (!urlParams.get("timestamp")) {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${currentDate.getDate()
            .toString()
            .padStart(2, "0")} ${currentDate.getHours()
            .toString()
            .padStart(2, "0")}:${currentDate.getMinutes()
            .toString()
            .padStart(2, "0")}:${currentDate.getSeconds()
            .toString()
            .padStart(2, "0")}`;
        document.getElementById("timestamp").textContent = formattedDate;
    }

    document.getElementById("copyright").textContent = new Date().getFullYear();
});