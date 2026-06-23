function startJourney() {
  window.location.href = "loading.html";
}

/* ===== HEART SYSTEM (FIXED) ===== */
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerHTML = ["❤", "💕", "💖", "💗"][Math.floor(Math.random() * 4)];

  h.style.left              = Math.random() * 100 + "vw";
  h.style.fontSize          = (10 + Math.random() * 20) + "px";
  h.style.animationDuration = (3 + Math.random() * 3) + "s";
  h.style.opacity           = Math.random() * 0.8 + 0.2;  // FIXED: was heart.style.opacity

  hearts.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 200);
