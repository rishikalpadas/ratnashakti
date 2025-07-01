const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

let particles = [];
const particleCount = 100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        // Create a radial gradient for a glowing diya effect
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size
        );
        gradient.addColorStop(0, 'rgba(255, 215, 0, 1)');      // Bright gold center
        gradient.addColorStop(0.5, 'rgba(255, 191, 0, 0.8)');  // Warm gold
        gradient.addColorStop(1, 'rgba(255, 140, 0, 0.2)');    // Soft orange glow

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowColor = 'rgba(255, 215, 0, 0.7)';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for next draw
    }
}

function init() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size <= 0.2) {
            particles.splice(index, 1);
            particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
        }
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

init();
animate();