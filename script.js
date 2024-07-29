// lenis smooth scroll
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// scrolltrigger stuff
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".whitespace",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  endTrigger: ".whitespace",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".header-info",
  end: "bottom bottom",
  onUpdate: (self) => {
    const rotation = self.progress * 360;
    gsap.to(".revealer", { rotation });
  },
});

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".header-info",
  end: "bottom bottom",
  onUpdate: (self) => {
    const progress = self.progress;
    const clipPath = `polygon(
   ${45 - 45 * progress}% ${0 + 0 * progress}%,
   ${55 + 45 * progress}% ${0 + 0 * progress}%,
   ${55 + 45 * progress}% ${100 - 0 * progress}%,
   ${45 - 45 * progress}% ${100 - 0 * progress}%
 )`;
    gsap.to(".revealer-1, .revealer-2", {
      clipPath: clipPath,
      ease: "none",
      duration: 0,
    });
  },
});



ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  end: "bottom 50%",
  scrub: 1,
  onUpdate: (self) => {
    const progress = self.progress;
    const left = 35 + (50 - 35) * progress;
    gsap.to(".revealer", {
      left: `${left}%`,
      ease: "none",
      duration: 0,
    });
  },
});

ScrollTrigger.create({
  trigger: ".whitespace",
  start: "top 50%",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self) => {
    const scale = 1 + 12 * self.progress;
    gsap.to(".revealer", {
      scale: scale,
      ease: "none",
      duration: 0,
    });
  },
});

  // Sélectionner tous les éléments <h1> dans la section .hero
  const letters = document.querySelectorAll('.hero div');

  // Créer l'animation en stagger
  gsap.to(letters, {
      duration: 1,          // Durée de l'animation pour chaque élément
      opacity: 1,           // Animation de l'opacité de 0 à 1
      y: 0,                 // Déplacement vertical de 50px à 0
      stagger: 0.2,         // Délai de décalage entre chaque animation
      ease: 'power2.out',   // Type d'animation
      delay: 0.5            // Délai avant le début de la première animation
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.header-images .img');
  
  images.forEach(img => {
    Draggable.create(img, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: document.body,
      inertia: true,
      onDragStart: function() {
        this.target.classList.add('dragging');
      },
      onDragEnd: function() {
        this.target.classList.remove('dragging');
      }
    });
  });
});