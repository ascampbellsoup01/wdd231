const directoryContainer = document.querySelector('.directory-container');
const toggleViewButton = document.getElementById('toggleView');

async function fetchMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    directoryContainer.innerHTML = '';
    data.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        directoryContainer.appendChild(memberCard);
    });
}

toggleViewButton.addEventListener('click', () => {
    directoryContainer.classList.toggle('list-view');
    directoryContainer.classList.toggle('grid-view');
});

document.getElementById('copyright').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

fetchMembers();