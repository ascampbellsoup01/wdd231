const weatherContainer = document.getElementById('weather-info');

async function fetchWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.0549&longitude=118.2426&hourly=temperature_2m&timezone=auto&timeformat=unixtime&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch');
        const data = await response.json();

        const currentTemperature = data.hourly.temperature_2m[0];
        const location = "Los Angeles, CA";

        weatherContainer.innerHTML = `
            <p>Location: ${location}</p>
            <p>Current Temperature: ${currentTemperature}°F</p>
            <p>Data provided for the current hour in Los Angeles.</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherContainer.innerHTML = '<p>Failed to load weather data.</p>';
    }
}

fetchWeather();

const spotlightContainer = document.getElementById('spotlight-cards');
fetch('members.json')
    .then(response => response.json())
    .then(data => {
        const goldSilverMembers = data.members.filter(member => member.level === 'gold' || member.level === 'silver');
        const randomMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
        randomMembers.forEach(member => {
            const memberHTML = `<div class="spotlight-card">
                <h4>${member.name}</h4>
                <img src="${member.logo}" alt="${member.name}">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>`;
            spotlightContainer.innerHTML += memberHTML;
        });
    });

const eventsContainer = document.getElementById('event-list');

const events = [
    { title: "Business Networking Night", date: "April 15, 2025", location: "Community Hall" },
    { title: "Spring Festival", date: "April 22, 2025", location: "Downtown Park" },
    { title: "Chamber Annual Meeting", date: "May 5, 2025", location: "Conference Center" }
];

events.forEach(event => {
    const eventItem = document.createElement('li');
    eventItem.innerHTML = `<strong>${event.title}</strong> - ${event.date} at ${event.location}`;
    eventsContainer.appendChild(eventItem);
});

const spotlightContainers = [
    document.getElementById('spotlight-1'),
    document.getElementById('spotlight-2'),
    document.getElementById('spotlight-3')
];

async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        const goldSilverMembers = data.members.filter(member => member.level === 2 || member.level === 3);

        const randomMembers = goldSilverMembers.sort(() => Math.random() - 0.5).slice(0, 3);

        randomMembers.forEach((member, index) => {
            spotlightContainers[index].innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name}" class="member-logo">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
        });
    } catch (error) {
        console.error('Error loading spotlights:', error);
    }
}

loadSpotlights();

document.getElementById("copyright").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;