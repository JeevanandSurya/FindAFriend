document.addEventListener('DOMContentLoaded', function () {
    var gender_input = document.getElementById('gender');
    var study_input = document.getElementById("study");
    var lfor_input = document.getElementById("lfor");
    if (localStorage['gender']) { // if job is set
        gender_input.value = localStorage['gender']; // set the value
    }
    gender_input.onchange = function () {
         localStorage["gender"] = this.value; // change localStorage on change
     }
    if (localStorage["study"]) { // if job is set
        study_input.value = localStorage["study"]; // set the value
    }
    study_input.onchange = function () {
         localStorage["study"] = this.value; // change localStorage on change
     }
    if (localStorage["lfor"]) { // if job is set
        lfor_input.value = localStorage["lfor"]; // set the value
    }
    lfor_input.onchange = function () {
         localStorage["lfor"] = this.value; // change localStorage on change
     }
 });