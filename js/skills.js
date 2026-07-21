/* ===================================
        SKILLS ANIMATION
=================================== */

const skillSection = document.querySelector("#skills");

const progressBars = document.querySelectorAll(".progress-fill");

const counters = document.querySelectorAll(".skill-percent");

let skillsPlayed = false;

function startCounter(){

    counters.forEach(counter=>{

        const target = Number(counter.dataset.target);

        let value = 0;

        const speed = target / 45;

        const interval = setInterval(()=>{

            value += speed;

            if(value >= target){

                value = target;

                clearInterval(interval);

            }

            counter.textContent = Math.round(value) + "%";

        },20);

    });

}

function animateSkills(){

    if(skillsPlayed) return;

    const top = skillSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 120){

        progressBars.forEach(bar=>{

            bar.style.width = bar.dataset.width + "%";

        });

        startCounter();

        skillsPlayed = true;

    }

}

window.addEventListener("scroll", animateSkills);

window.addEventListener("load", animateSkills);

/* ===================================
        SPOTLIGHT
=================================== */

document.querySelectorAll(".skill-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x",x+"px");

        card.style.setProperty("--y",y+"px");

    });

});