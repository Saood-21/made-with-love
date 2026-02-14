// Background music player — randomly plays songs, persists across pages
// Include this script on any page with <audio id="bgMusic"> and <div id="musicToggle">

const bgSongFiles = [
    "Aaj Din Chadheya -lyrics  Rahat Fateh Ali Khan  Love Aaj Kal @LYRICS.mp3",
    "Aaj Kal Tere Mere Pyar Ke Charche  Brahmachari (1968)  Shammi Kapoor  Mumtaz  Pran  Hindi Song.mp3",
    "Agora Hills.mp3",
    "Jawani Jan-E-Man House Trap.mp3",
    "Jimmy pulls up in his blue Chevy Nova - Lana Del Rey #lanadelreylove.mp3",
    "kangana tera ni (sped up).mp3",
    "Karan Aujla, Ikky - For A Reason (Lyrics).mp3",
    "KASHISH (Lyrics) Ashish Bhatia  Kashish Ratnani  Omkar Singh.mp3",
    "Lat Lag Gaye (Lyrics) - Benny Dayal & Shalmali Kholgade !.mp3",
    "main tera.mp3",
    "Main Tere pai mar gayi Sajnare Black Screen Lyrics Video.mp3",
    "Meem Se Mohabbat -Beqarrar Yeh Dil  - Singers [ Asim Azhar & Qirat Haider ] - HUM TV.mp3",
    "Mere Kaan Mai Hai Jo Bali  Kithe Reh Gaya (lyrical Video)  Neeti Mohan.mp3",
    "Noor Mahal - Chani Nattan, Inderpal Moga (LyricsEnglish Meaning).mp3",
    "rab jane menu ho gaya ki ve tere bina mera lagda  Slowed Reverb  DO PALL SURINDER KAUR X COACHSAH.mp3",
    "Ranjha  Official Video  Shershaah  SidharthKiara  B Praak  Jasleen Royal  Romy  Anvita Dutt.mp3",
    "Ravyn Lenae - Love Me Not (Lyrics).mp3",
    "Sanun Nahar Wale Pul  @EMIPakistanOfficial Madam Noor Jehan.mp3",
    "Taylor Swift - Style.mp3",
    "Taylor Swift - The Fate of Ophelia (Official Music Video).mp3",
    "Taylor Swift - Wildest Dreams (Lyrics).mp3",
    "Tere Liye - Atif Aslam & Shreya Ghoshal (Lyrics)  Lyrical Bam Hindi.mp3",
    "Tesher - Jalebi Baby (Original Version) (Official Lyric Video).mp3",
    "The Chainsmokers - Closer (Lyrics) ft. Halsey.mp3",
    "The Marías - Heavy (edit audio).mp3",
    "The Marías - Jupiter.mp3",
    "ve kamleya - edit audio.mp3",
    "Zaalima  Raees  Shah Rukh Khan  Arijit Singh & Harshdeep Kaur  JAM8  Pritam.mp3",
    "Tujh Mein Rab Dikhta Hai Song  Rab Ne Bana Di Jodi  Shah Rukh Khan, Anushka Sharma  Roop Kumar.mp3",
];

(function () {
    const bgMusic = document.getElementById('bgMusic');
    const bgToggle = document.getElementById('musicToggle');
    if (!bgMusic || !bgToggle) return;

    let bgPlaying = false;
    let lastIndex = -1;
    let currentFile = null;

    function pickRandom() {
        let idx;
        do {
            idx = Math.floor(Math.random() * bgSongFiles.length);
        } while (idx === lastIndex && bgSongFiles.length > 1);
        lastIndex = idx;
        return bgSongFiles[idx];
    }

    function loadAndPlay(file, startTime) {
        currentFile = file || pickRandom();
        bgMusic.src = 'assets/music/' + encodeURIComponent(currentFile);
        bgMusic.loop = false;
        bgMusic.play().then(() => {
            if (startTime && startTime > 0) {
                bgMusic.currentTime = startTime;
            }
        }).catch(() => {});
    }

    // When a song ends, pick the next random one
    bgMusic.addEventListener('ended', () => {
        if (bgPlaying) loadAndPlay();
    });

    // Toggle button
    bgToggle.addEventListener('click', () => {
        if (bgPlaying) {
            bgMusic.pause();
            bgToggle.textContent = '🎵';
            bgPlaying = false;
        } else {
            bgPlaying = true;
            bgToggle.textContent = '🎶';
            if (bgMusic.paused) loadAndPlay();
        }
        saveState();
    });

    // --- Persist playback across page navigation ---

    function saveState() {
        const state = {
            playing: bgPlaying,
            file: currentFile,
            time: bgMusic.currentTime || 0,
            timestamp: Date.now()
        };
        try { localStorage.setItem('bgMusicState', JSON.stringify(state)); } catch (e) {}
    }

    function restoreState() {
        try {
            const raw = localStorage.getItem('bgMusicState');
            if (!raw) return;
            const state = JSON.parse(raw);

            // Only restore if the state was saved recently (within 5 seconds — i.e. a page navigation)
            const age = Date.now() - (state.timestamp || 0);
            if (age > 5000) return;

            if (state.playing) {
                bgPlaying = true;
                bgToggle.textContent = '🎶';
                if (state.file) {
                    // Resume the specific song, accounting for time elapsed during page load
                    const resumeTime = (state.time || 0) + (age / 1000);
                    loadAndPlay(state.file, resumeTime);
                } else {
                    // No specific song — pick a random one (e.g. first visit from index)
                    loadAndPlay();
                }
            }
        } catch (e) {}
    }

    // Save state before leaving the page
    window.addEventListener('beforeunload', saveState);

    // Also save periodically so the position stays fresh
    setInterval(saveState, 1000);

    // Restore on load
    restoreState();
})();
