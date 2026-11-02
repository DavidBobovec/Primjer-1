const canvas = document.getElementById("platno");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let brzinaX = 10;
let brzinaY = 5;
let polumjer = 20;

function animacija() {

    ctx.clearRect(0, 0, 1000, 500);

    ctx.beginPath();
    ctx.arc(x, y, polumjer, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    x = x + brzinaX;
    y = y + brzinaY;

    if (x + polumjer > 1000 || x - polumjer < 0) {
        brzinaX = -brzinaX;
    }

    if (y + polumjer > 500 || y - polumjer < 0) {
        brzinaY = -brzinaY;
    }

    requestAnimationFrame(animacija);
}

animacija();