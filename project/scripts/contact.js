document.getElementById("contact-form").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);

    alert("Message sent! Redirecting to Thank You page...");
    window.location.href = "thank-you.html";
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;