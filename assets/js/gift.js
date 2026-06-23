/* ===== HEART RAIN ===== */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerHTML = ["💖","💕","❤","💗","💝"][Math.floor(Math.random()*5)];
  h.style.left              = Math.random() * 100 + "vw";
  h.style.fontSize          = (10 + Math.random() * 18) + "px";
  h.style.animationDuration = (3 + Math.random() * 3) + "s";
  h.style.opacity           = Math.random() * 0.7 + 0.3;
  heartsContainer.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}

setInterval(createHeart, 150);

/* ===== BURST PARTICLES ===== */
function createBurst() {
  const burst   = document.getElementById("burst");
  const colors  = ["#ff2e63","#ff9eb5","#ffb3c6","#ff4d6d","#fff","#ffd1dc"];
  const cx      = window.innerWidth / 2;
  const cy      = window.innerHeight / 2;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    const angle = Math.random() * 360;
    const dist  = 80 + Math.random() * 180;
    const rad   = angle * Math.PI / 180;
    p.style.cssText = `
      left:${cx}px; top:${cy}px;
      width:${6+Math.random()*10}px;
      height:${6+Math.random()*10}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      --tx:${Math.cos(rad)*dist}px;
      --ty:${Math.sin(rad)*dist}px;
      animation-duration:${0.5+Math.random()*0.5}s;
    `;
    burst.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }
}

/* ===== OPEN GIFT ===== */
function openGift() {
  const gift = document.getElementById("gift");
  gift.classList.add("open");
  gift.onclick = null;

  createBurst();

  setTimeout(() => {
    window.location.href = "menu.html";
  }, 900);
}
