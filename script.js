
const hamburger = document.querySelector(".hamburger");
const navManu = document.querySelector(".nav-menu");
const subTopicAboutMe= document.querySelector(".subTopic-about-me");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navManu.classList.toggle("active");
    subTopicAboutMe.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",() =>{
        hamburger.classList.remove("active");
        navManu.classList.remove("active");
    }))