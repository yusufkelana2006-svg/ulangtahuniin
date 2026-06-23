const messages = [
  "Menyiapkan kejutan kamu... 🎁",
  "Mengumpulkan semua kenangan... 💕",
  "Menghias dengan cinta... 💖",
  "Hampir siap... ✨"
];

const fill = document.querySelector(".loader-fill");
const text = document.getElementById("loading-text");

let progress = 0;
let msgIndex = 0;

const interval = setInterval(() => {
  progress += 1.5;
  fill.style.width = Math.min(progress, 100) + "%";

  if (progress >= (msgIndex + 1) * 25 && msgIndex < messages.length) {
    text.textContent = messages[msgIndex];
    msgIndex++;
  }

  if (progress >= 100) {
    clearInterval(interval);
    setTimeout(() => {
      window.location.href = "gift.html";
    }, 400);
  }
}, 45);
