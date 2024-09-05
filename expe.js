
import EXPERIENCE_DATA from './experience.js';


const EXPERIENCE_JSON = JSON.parse(EXPERIENCE_DATA)



function addexperiences(experiences) {

    
    for (let u = 0; u < experiences.length; u++) {
        const experience = experiences[u];

        const experienceCard = document.createElement('div');

        experienceCard.classList.add('experience-card');

        experienceCard.innerHTML = `
        <p>${experience.position}(${experience.timeframe})</p>
        <h4>${experience.employer}: ${experience.location}</h4>
        
    `;
        
        const experiencesContainer = document.getElementById('experiences');
        experiencesContainer.appendChild(experienceCard);

    }
}

addexperiences(EXPERIENCE_JSON)