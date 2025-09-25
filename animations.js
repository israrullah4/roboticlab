// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate all elements with the class "fade-up"
gsap.utils.toArray(".fade-up").forEach(element => {
  gsap.to(element, {
    opacity: 1,
    y: 0, // Animate the element to its original position (y: 0)
    duration: 1.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%", // This starts the animation when the top of the element hits 80% of the viewport
      toggleActions: "play none none none" // Play the animation once
    }
  });
});