let skillsLink = document.querySelector("#skillsLink");
let mySkills = document.querySelector("#mySkills");

skillsLink.addEventListener("click", navigateMySkills,false);

function navigateMySkills(e) {
  mySkills.scrollIntoView({
    behavior:"smooth"});
}

let fskillsLink = document.querySelector("#fskillsLink");
let mySkills = document.querySelector("#mySkills");

fskillsLink.addEventListener("click", navigateMySkills,false);

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



const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]

togglebutton.addEventListener('click',()=> {
  navbarLinks.classList.toggle('active')
})