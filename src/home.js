export default function createHomePage() {
    const content = document.querySelector('#content');

    const welcomeSplash = content.appendChild(document.createElement('div'));
    const greeting = welcomeSplash.appendChild(document.createElement('div'));
    const greetingH2 = greeting.appendChild(document.createElement('h2'));
    const greetingP = greeting.appendChild(document.createElement('p'));

    const info = content.appendChild(document.createElement('div'));
    const location = info.appendChild(document.createElement('div'));
    const locationline1 = location.appendChild(document.createElement('p'));
    const locationline2 = location.appendChild(document.createElement('p'));
    const locationline3 = location.appendChild(document.createElement('p'));
    const hours = info.appendChild(document.createElement('div'));
    const hoursTitle = hours.appendChild(document.createElement('p'));
    const hoursP = hours.appendChild(document.createElement('p'));

    welcomeSplash.classList.add('welcomesplash');
    greeting.classList.add('greeting');
    info.classList.add('info');
    location.classList.add('location');
    hours.classList.add('hours');

    greetingH2.textContent = 'Fresh sandwiches daily';
    greetingP.textContent = 'Fresh ingredients, fresh taste';
    locationline1.textContent = 'The Sandwich Shop';
    locationline2.textContent = 'Citystreet 1';
    locationline3.textContent = '12345 Mycity';
    hoursTitle.textContent = 'Opening hours:';
    hoursP.textContent = 'Mo-Sa: 6:30 - 18:00';
}