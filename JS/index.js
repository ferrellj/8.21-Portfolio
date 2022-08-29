let skillsLink = document.querySelector("#skillsLink");
let mySkills = document.querySelector("#mySkills");

skillsLink.addEventListener("click", navigateMySkills,false);

function navigateMySkills(e) {
  mySkills.scrollIntoView({
    behavior:"smooth"});
}

let csLink = document.querySelector("#csLink");
let caseStudies = document.querySelector("#caseStudies");

csLink.addEventListener("click", navigatecaseStudies,false);

function navigatecaseStudies(e) {
  caseStudies.scrollIntoView({
    behavior:"smooth"});
} 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }