// FINWISE - High-Performance Canvas 3D Engine for Floating Coins & Financial Particles

/**
 * Renders realistic floating 3D Gold Rupee Coins with specular highlights,
 * continuous 3D rotation, and dynamic mouse interaction.
 */
class HeroCoinsCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width = canvas.offsetWidth || window.innerWidth;
    this.height = canvas.height = canvas.offsetHeight || window.innerHeight;
    this.coins = [];
    this.mouse = { x: this.width / 2, y: this.height / 2, targetX: this.width / 2, targetY: this.height / 2 };
    this.animId = null;
    this.initCoins();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  initCoins() {
    this.coins = [
      { x: this.width * 0.2, y: this.height * 0.35, radius: 38, rotY: 0.2, rotX: 0.3, speedY: 0.022, speedX: 0.008, bobSpeed: 0.002, bobAmp: 18, bobOffset: 0, glow: '#00F5A0' },
      { x: this.width * 0.82, y: this.height * 0.25, radius: 46, rotY: 1.5, rotX: -0.2, speedY: 0.018, speedX: 0.005, bobSpeed: 0.0025, bobAmp: 22, bobOffset: 1.5, glow: '#FFD700' },
      { x: this.width * 0.78, y: this.height * 0.75, radius: 34, rotY: 3.2, rotX: 0.4, speedY: 0.026, speedX: 0.012, bobSpeed: 0.0018, bobAmp: 15, bobOffset: 3.0, glow: '#00E5FF' },
      { x: this.width * 0.15, y: this.height * 0.78, radius: 30, rotY: 4.8, rotX: -0.3, speedY: 0.02, speedX: 0.009, bobSpeed: 0.0022, bobAmp: 14, bobOffset: 4.5, glow: '#FFB800' },
      { x: this.width * 0.5, y: this.height * 0.15, radius: 24, rotY: 2.1, rotX: 0.1, speedY: 0.028, speedX: 0.006, bobSpeed: 0.003, bobAmp: 12, bobOffset: 2.2, glow: '#10B981' }
    ];
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      this.width = this.canvas.width = this.canvas.offsetWidth || window.innerWidth;
      this.height = this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
      this.initCoins();
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.targetX = e.clientX - rect.left;
      this.mouse.targetY = e.clientY - rect.top;
    });
  }

  drawCoin(coin, time) {
    const ctx = this.ctx;
    const { radius, rotY, rotX, bobSpeed, bobAmp, bobOffset } = coin;

    // Bobbing motion
    const currentY = coin.y + Math.sin(time * bobSpeed + bobOffset) * bobAmp;
    const currentX = coin.x + Math.cos(time * (bobSpeed * 0.7) + bobOffset) * (bobAmp * 0.4);

    // Subtle parallax response to mouse
    const offsetX = (this.mouse.x - this.width / 2) * 0.03;
    const offsetY = (this.mouse.y - this.height / 2) * 0.03;

    const posX = currentX + offsetX;
    const posY = currentY + offsetY;

    ctx.save();
    ctx.translate(posX, posY);

    // Calculate 3D perspective projection via scale
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const absCosY = Math.max(0.12, Math.abs(cosY));

    // Outer Ambient Glow
    const glowGrad = ctx.createRadialGradient(0, 0, radius * 0.5, 0, 0, radius * 2.2);
    glowGrad.addColorStop(0, 'rgba(0, 245, 160, 0.25)');
    glowGrad.addColorStop(0.5, 'rgba(255, 215, 0, 0.12)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 2.2, 0, Math.PI * 2);
    ctx.fill();

    // 3D Coin Edge / Thickness extrusion
    const thickness = 10;
    const edgeStep = 1;
    const sign = cosY >= 0 ? 1 : -1;

    for (let t = -thickness / 2; t <= thickness / 2; t += edgeStep) {
      const edgeGrad = ctx.createLinearGradient(-radius, 0, radius, 0);
      edgeGrad.addColorStop(0, '#B38728');
      edgeGrad.addColorStop(0.3, '#FBF5B7');
      edgeGrad.addColorStop(0.7, '#DAA520');
      edgeGrad.addColorStop(1, '#AA771C');

      ctx.fillStyle = edgeGrad;
      ctx.beginPath();
      ctx.ellipse(t * sinY * 0.4, 0, radius * absCosY, radius, rotX, 0, Math.PI * 2);
      ctx.fill();
    }

    // Coin Face (Front or Back)
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(thickness / 2 * sinY * 0.4 * sign, 0, radius * absCosY, radius, rotX, 0, Math.PI * 2);
    ctx.clip();

    // Metallic Radial Gradient on face
    const faceGrad = ctx.createRadialGradient(-radius * 0.3 * cosY, -radius * 0.3, radius * 0.1, 0, 0, radius);
    if (cosY >= 0) {
      // Front Face: Glowing Gold & Emerald tint
      faceGrad.addColorStop(0, '#FFFBEB');
      faceGrad.addColorStop(0.2, '#FDE047');
      faceGrad.addColorStop(0.5, '#D97706');
      faceGrad.addColorStop(0.85, '#B45309');
      faceGrad.addColorStop(1, '#78350F');
    } else {
      // Back Face: Deep burnished gold
      faceGrad.addColorStop(0, '#FEF08A');
      faceGrad.addColorStop(0.3, '#CA8A04');
      faceGrad.addColorStop(0.7, '#854D0E');
      faceGrad.addColorStop(1, '#451A03');
    }
    ctx.fillStyle = faceGrad;
    ctx.fillRect(-radius * 2, -radius * 2, radius * 4, radius * 4);

    // Inner embossed border ring
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * absCosY * 0.82, radius * 0.82, rotX, 0, Math.PI * 2);
    ctx.stroke();

    // Embossed Indian Rupee symbol: ₹
    if (absCosY > 0.25) {
      ctx.save();
      ctx.scale(absCosY, 1);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 6;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 2;
      ctx.font = `bold ${Math.round(radius * 0.9)}px 'Outfit', 'Inter', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('₹', 0, 2);
      ctx.restore();
    }

    // Specular Glint Highlight sweeping across
    const glintPos = Math.sin(time * 0.003 + coin.bobOffset) * radius * 2;
    const glintGrad = ctx.createLinearGradient(glintPos - 25, -radius, glintPos + 25, radius);
    glintGrad.addColorStop(0, 'rgba(255,255,255,0)');
    glintGrad.addColorStop(0.5, 'rgba(255,255,255,0.75)');
    glintGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = glintGrad;
    ctx.fillRect(-radius * 2, -radius * 2, radius * 4, radius * 4);

    ctx.restore(); // end clip
    ctx.restore(); // end translate
  }

  animate() {
    const time = performance.now();
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth mouse lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.coins.forEach(coin => {
      coin.rotY += coin.speedY;
      coin.rotX += coin.speedX;
      this.drawCoin(coin, time);
    });

    this.animId = requestAnimationFrame(this.animate);
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}

/**
 * Background Ambient Fintech Particle Matrix
 */
class FinancialParticleNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.init();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  init() {
    const count = Math.min(65, Math.floor((this.width * this.height) / 18000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? '#00F5A0' : (Math.random() > 0.5 ? '#00E5FF' : '#FFD700')
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      this.init();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse repulsion/attraction
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= (dx / dist) * 1.5;
        p.y -= (dy / dist) * 1.5;
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 95) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = '#00F5A0';
          this.ctx.globalAlpha = (1 - d / 95) * 0.14;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    this.ctx.globalAlpha = 1;
    this.animId = requestAnimationFrame(this.animate);
  }
}

/**
 * 3D Tilt Hook/Helper for cards
 */
function apply3DTilt(element, maxAngle = 12) {
  if (!element) return;

  function handleMove(e) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxAngle;
    const rotateY = ((x - centerX) / centerX) * maxAngle;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  function handleLeave() {
    element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  element.addEventListener('mousemove', handleMove);
  element.addEventListener('mouseleave', handleLeave);

  return () => {
    element.removeEventListener('mousemove', handleMove);
    element.removeEventListener('mouseleave', handleLeave);
  };
}
