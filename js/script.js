var showSearch = 0;
var showForm = "";

var search_button = document.getElementById("search_button");

function setSearch() {
    if(showSearch == 0) {
        var open_search = document.forms[0];
        open_search.className = "show_search";
        showSearch = 1;
    } else if(showSearch == 1) {
        var open_search = document.forms[0];
        open_search.className = "hide_search";
        showSearch = 0;
    }
    return showSearch;
}

function showProject() {
    showForm = document.getElementById("project").className="show_project";
    showForm = document.getElementById("stage").className="hide_form";
    console.log(project_form);
}

function showStage() {
    showForm = document.getElementById("stage").className="show_stage";
    showForm = document.getElementById("project").className="hide_form";
    console.log(project_form);
}

