import PROJECT_DATA from './project.js';

const PROJECT_JSON = JSON.parse(PROJECT_DATA)

function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const projects = document.getElementById("projects");

function addProjects(projects) {

    
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        const projectCard = document.createElement('div');

        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
        <a href="${project.link}" class="projectlink" target="_blank">
            <img src="${project.img}" width="100%" class="projimg" alt="${project.name} image">
            <div class="category"><h4>${project.category}</h4></div>
            <h3 class="name">${project.name}</h3>
        </a>
    `;
        
        const projectsContainer = document.getElementById('projects');
        projectsContainer.appendChild(projectCard);

    }
}

addProjects(PROJECT_JSON)



function filterhtmlcssOnly() {
    deleteChildElements(projects);

    
    const htmlcssproj = PROJECT_JSON.filter(project => project.category == "HTML, CSS");
    console.log(htmlcssproj.length);

    
    addProjects(htmlcssproj);
}

function filterhtmlcssjs() {
    deleteChildElements(projects);

    
    const htmlcssjsproj = PROJECT_JSON.filter(project => project.category == "HTML, CSS, JS");
    console.log(htmlcssjsproj.length);

    
    addProjects(htmlcssjsproj);
}

function showAllProj() {
    deleteChildElements(projects);

    
    addProjects(PROJECT_JSON);
}

const htmlcssBtn = document.getElementById("html-css");
const htmlscssjsBtn = document.getElementById("html-css-js");
const allBtn = document.getElementById("all-btn");


htmlcssBtn.addEventListener("click", filterhtmlcssOnly);
htmlscssjsBtn.addEventListener("click", filterhtmlcssjs);
allBtn.addEventListener("click", showAllProj);