function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
  
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

document.getElementById("copyright").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;