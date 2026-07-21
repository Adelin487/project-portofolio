/* ===================================
        TYPING EFFECT
=================================== */

const typingText = document.getElementById("typing");

const words = [

    "Flutter Developer",

    "Web Developer",

    "UI/UX Designer",

    "Backend Developer"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent = currentWord.substring(0, charIndex++);

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }else{

        typingText.textContent = currentWord.substring(0, charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();