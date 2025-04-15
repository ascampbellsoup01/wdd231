const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (!lastVisit) {
  document.querySelector('.sidebar').textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
  document.querySelector('.sidebar').textContent = daysSinceLastVisit < 1
    ? "Back so soon! Awesome!"
    : `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
}

localStorage.setItem('lastVisit', currentVisit);

document.getElementById("copyright").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;