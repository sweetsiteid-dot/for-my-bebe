const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");

/* LOVE LETTER TITLE */

document.title =
"💌 A Love Letter For My Bebe";

/* OPEN WEBSITE */

openBtn.addEventListener("click", () => {

    music.play();

    /* LOVE LETTER FALLING */

    for(let i = 0; i < 60; i++){

        const item = document.createElement("div");

        const icons = [
            "🤍",
            "♡",
            "✉️",
            "💌",
            "✨"
        ];

        item.innerHTML =
        icons[Math.floor(Math.random()*icons.length)];

        item.classList.add("falling");

        item.style.left =
        Math.random()*100 + "vw";

        item.style.fontSize =
        (Math.random()*20 + 20) + "px";

        item.style.animationDuration =
        (Math.random()*2 + 2) + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 4000);

    }

    /* TRANSITION */

    setTimeout(() => {

        opening.style.opacity = "0";
        opening.style.transition = "1s";

        setTimeout(() => {

            opening.style.display = "none";
            mainContent.style.display = "block";

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        },1000);

    },2000);

});

/* MEMORY BUTTON */

memoryBtn.addEventListener("click", () => {

    document.getElementById("memories")
    .scrollIntoView({
        behavior: "smooth"
    });

});

/* MUSIC BUTTON */

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML =
        "🤍 Pause Last Forever";

    } else {

        music.pause();
        musicBtn.innerHTML =
        "🎵 Play Last Forever";

    }

});

/* AUTO SLIDER */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    dots.forEach((dot) => {

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    slides[index].style.animation =
    "fadePhoto 1s ease";

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 4000);

/* FLOATING LOVE LETTERS */

const heartsContainer =
document.querySelector(".hearts");

function createHeart() {

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    const icons = [
        "🤍",
        "♡",
        "✉️",
        "💌"
    ];

    heart.innerHTML =
    icons[Math.floor(
        Math.random() * icons.length
    )];

    heart.style.left =
    Math.random() * 100 + "%";

    heart.style.fontSize =
    Math.random() * 20 + 18 + "px";

    heart.style.animationDuration =
    Math.random() * 5 + 8 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 700);

/* INITIAL */

showSlide(0);
