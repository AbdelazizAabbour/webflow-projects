
const canvas = document.getElementById('shaderCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Animation variables
let particles = [];
const particleCount = 50;
const colors = ['#996515', '#D4AF37', '#996515'];

// Particle class
class Particle {
  constructor() {
    this.reset();
  }
  
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 50 + 20;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.alpha = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
  }
}

// Create particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  requestAnimationFrame(animate);
}

animate();

/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||------khalih ok------||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||-----le fille -------||||||||||||||||||||||||||||||||||| */
/* |||||||||||||||||||||||||||----project.html-----||||||||||||||||||||||||||||||||||| */
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */




/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */ 
/* |||||||||||||||||||||||||||---------------------||||||||||||||||||||||||||||||||||| */ 
/* |||||||||||||||||||||||||||-----  revies  -------|||||||||||||||||||||||||||||||||| */ 
/* |||||||||||||||||||||||||||---------------------||||||||||||||||||||||||||||||||||| */ 
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */ 

