const items = [
    { type: "image", src: "media/photo1.jpg", text: "HEY GOONER..." },
    { type: "image", src: "media/photo2.jpg", text: "HEY GOONER..." },
    { type: "video", src: "media/video1.mov", text: "START PUMPING FOR YOUR PRINCESS..." },
    { type: "video", src: "media/video2.mov", text: "START PUMPING FOR YOUR PRINCESS..." },
    { type: "image", src: "media/photo3.jpg", text: "START PUMPING FOR YOUR PRINCESS..." },
    { type: "image", src: "media/photo4.jpg", text: "TRIGGERED YET, WHITE BOI?" },
    { type: "image", src: "media/photo5.jpg", text: "TRIGGERED YET, WHITE BOI?" },
    { type: "video", src: "media/video3.mov", text: "TRIGGERED YET, WHITE BOI?" },
    { type: "image", src: "media/photo8.jpg", text: "BOW DOWN TO YOUR QUEEN..." },
    { type: "video", src: "media/video4.mov", text: "BOW DOWN TO YOUR QUEEN..." },
    { type: "image", src: "media/photo7.jpg", text: "BOW DOWN TO YOUR QUEEN..." },
    { type: "image", src: "media/photo6.jpg", text: "AND KEEP GOONING..." },
    { type: "video", src: "media/video5.mov", text: "AND KEEP GOONING..." },
    { type: "image", src: "media/photo9.jpg", text: "AND IF YOU WANNA CUM TO YOUR QUEEN..." },
    { type: "image", src: "media/photo10.jpg", text: "AND IF YOU WANNA CUM TO YOUR QUEEN..." },
    { type: "video", src: "media/video6.mov", text: "3" },
    { type: "image", src: "media/photo11.jpg", text: "2" },
    { type: "image", src: "media/photo12.jpg", text: "1" },
];

const social = "https://throne.com/bebexoxo";
let i = 0;

const d = 1000;
const canVibrate = typeof navigator.vibrate === "function";

// 100 ms vibrazione, 100 ms pausa
const vibrationPattern = [100, 100];

let vibrationInterval = null;

function startVibration() {
    if (!canVibrate) return;

    const pattern = [100, 100];

    navigator.vibrate(pattern);

    vibrationInterval = setInterval(() => {
        navigator.vibrate(pattern);
    }, 200);
}

function stopVibration() {
    if (!canVibrate) return;

    clearInterval(vibrationInterval);
    navigator.vibrate(0);
}

startVibration();

function show() {
    let e = items[i];
    let el = document.createElement(e.type === "image" ? "img" : "video");

    el.src = e.src;

    if (e.type === "video") {
        el.autoplay = true;
        el.muted = true;
        el.playsInline = true;
        el.loop = true;
    }

    let s = document.getElementById("slide");
    s.innerHTML = "";
    s.appendChild(el);

    text.textContent = e.text;

    i++;

    if (i >= items.length) {
        setTimeout(() => {
            stopVibration();
            location.href = social;
        }, d);
    } else {
        setTimeout(show, d);
    }
}

show();