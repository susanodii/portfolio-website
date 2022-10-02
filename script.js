
const menu = document.querySelector('.nav-menu')
const hambuger = document.querySelector('.hambuger')
const menuIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-window-close')
// const navLink = document.querySelector('.nav-link')
const eachNavLink = document.querySelectorAll('.nav-link')
const myLink = document.getElementById('myLink')

const toggleMenu  = function(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        menuIcon.style.display = "block";
        closeIcon.style.display ="none"
        
    }else {
        menu.classList.add("showMenu");
        menuIcon.style.display = "none";
        closeIcon.style.display ="block"
        document.querySelector(".profile-image").style.marginTop = "25rem";
        document.querySelector(".place-of-work-section").style.marginTop = "15rem";
    }
}


hambuger.addEventListener('click', toggleMenu)

// Functionality for individual nav-link
eachNavLink.forEach(
    function(navLink){
        console.log(navLink)
      navLink.addEventListener('click', toggleMenu)
    //   console.log(eachNavLINK)  
    console.log(navLink)
    console.log(toggleMenu);
    }
    
)