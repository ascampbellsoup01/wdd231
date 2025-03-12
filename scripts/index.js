document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    const courses = [
        { id: 1, name: 'Course 1', completed: true, category: 'WDD', credits: 3 },
        { id: 2, name: 'Course 2', completed: false, category: 'CSE', credits: 3 },
    ];

    function displayCourses(courseList) {
        const courseSection = document.querySelector('#course p');
        courseSection.innerHTML = '';
        courseList.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = `course ${course.completed ? 'completed' : ''}`;
            courseElement.textContent = `${course.name} - ${course.credits} credits`;
            courseSection.appendChild(courseElement);
        });
    }

    displayCourses(courses);

    document.getElementById('show-all').addEventListener('click', () => displayCourses(courses));
    document.getElementById('show-wdd').addEventListener('click', () => displayCourses(courses.filter(course => course.category === 'WDD')));
    document.getElementById('show-cse').addEventListener('click', () => displayCourses(courses.filter(course => course.category === 'CSE')));

    function displayTotalCredits(courseList) {
        const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
        document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
    }

    displayTotalCredits(courses);
});
