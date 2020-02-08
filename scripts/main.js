var projects = document.getElementsByClassName("project");
var currentProject = 0;

function changeProject(side) {

    //changes project index potentially
    if(side == "left") {
        if(currentProject != 0)
            currentProject -= 1;
        else
            currentProject = projects.length -1;
    }
    else {
        if(currentProject != projects.length - 1)
            currentProject  += 1;
        else
            currentProject = 0;
    }

    //hides all projects
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }

    //makes selected project visible
    projects[currentProject].style.display = "initial";
}