import PROJECT_DATA from './project.js';

const PROJECT_JSON = JSON.parse(PROJECT_DATA)

function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const projects = document.getElementById("projects");

function addProjects(projects) {

    // loop over each item in the data
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
    

        // create a new div element, which will become the game card
        const projectCard = document.createElement('div');

        // add the class game-card to the list
        projectCard.classList.add('project-card');

        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")

        projectCard.innerHTML = `
        <img src="${project.img}" width="100%" class="projimg" alt="${project.name} image">
        <div class="category"><h4>${project.category}</h4></div>
        <h3 class="name">${project.name}</h3>
    `;
        // append the game to the games-container
        const projectsContainer = document.getElementById('projects');
        projectsContainer.appendChild(projectCard);

    }
}

addProjects(PROJECT_JSON)



function filterhtmlcssOnly() {
    deleteChildElements(projects);

    // use filter() to get a list of games that have not yet met their goal
    const htmlcssproj = PROJECT_JSON.filter(project => project.category == "HTML, CSS");
    console.log(htmlcssproj.length);

    // use the function we previously created to add the unfunded games to the DOM
    addProjects(htmlcssproj);
}

function filterhtmlcssjs() {
    deleteChildElements(projects);

    // use filter() to get a list of games that have not yet met their goal
    const htmlcssjsproj = PROJECT_JSON.filter(project => project.category == "HTML, CSS, JS");
    console.log(htmlcssjsproj.length);

    // use the function we previously created to add the unfunded games to the DOM
    addProjects(htmlcssjsproj);
}

function showAllProj() {
    deleteChildElements(projects);

    // add all games from the JSON data to the DOM
    addProjects(PROJECT_JSON);
}

const htmlcssBtn = document.getElementById("html-css");
const htmlscssjsBtn = document.getElementById("html-css-js");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
htmlcssBtn.addEventListener("click", filterhtmlcssOnly);
htmlscssjsBtn.addEventListener("click", filterhtmlcssjs);
allBtn.addEventListener("click", showAllProj);