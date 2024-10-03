function startAnimation() {
    var confettiCanvas = document.getElementById('confettiCanvas');
    var ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    var confetti = [];
    var confettiCount = 300;
    var colors = ['#ffcc00', '#ff6699', '#ff9966', '#ff5e62', '#ffffff'];

    for (var i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * confettiCount,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 90
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        for (var i = 0; i < confettiCount; i++) {
            var c = confetti[i];
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
            ctx.fillStyle = c.color;
            ctx.fill();
        }
        updateConfetti();
    }

    function updateConfetti() {
        for (var i = 0; i < confettiCount; i++) {
            var c = confetti[i];
            c.y += Math.sin(c.d) + 1;
            c.x += Math.cos(c.d) * 1.5;
            if (c.y > confettiCanvas.height) {
                c.y = 0;
                c.x = Math.random() * confettiCanvas.width;
            }
        }
    }

    setInterval(drawConfetti, 20);
}
