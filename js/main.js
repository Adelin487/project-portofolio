console.log("main.js berhasil dimuat");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ===================================
        SCROLL TO TOP
=================================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ===================================
        REVEAL ANIMATION
=================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

/* ===================================
        CONTACT FORM VALIDATION
=================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        Swal.fire({

            icon:"warning",

            title:"Incomplete Form",

            text:"Please fill in all fields.",

            confirmButtonColor:"#2563EB"

        });

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        Swal.fire({

            icon:"error",

            title:"Invalid Email",

            text:"Please enter a valid email address.",

            confirmButtonColor:"#2563EB"

        });

        return;

    }

    Swal.fire({

        icon:"Berhasil",

        title:"Pesan Terkirim!",

        text:"Terima kasih telah menghubungi saya. Saya akan segera menghubungi Anda",

        confirmButtonColor:"#2563EB"

    });

    contactForm.reset();

});

/* ===================================
        LOADING SCREEN
=================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

    }, 1200);

});

/* ===================================
        CURSOR GLOW
=================================== */

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

    cursorGlow.style.left=e.clientX+"px";

    cursorGlow.style.top=e.clientY+"px";

});

/* ===================================
        HERO PARTICLES
=================================== */

tsParticles.load("particles-js",{

    background:{
        color:"transparent"
    },

    particles:{

        number:{
            value:35
        },

        color:{
            value:"#38BDF8"
        },

        size:{
            value:2
        },

        move:{
            enable:true,
            speed:1
        },

        links:{
            enable:true,
            color:"#38BDF8",
            opacity:.2
        },

        opacity:{
            value:.4
        }

    }

});