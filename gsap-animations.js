gsap.registerPlugin(SplitText, ScrollTrigger);

function runPreloader() {
  return gsap.timeline()
    .set(".preloader", { x: "-100%" }) // start off screen left
    .set(".preloader-logo", { opacity: 0, x: -50 })

    // Slide preloader in
    .to(".preloader", { x: "0%", duration: 0.5, ease: "power2.out" })

    // Fade & slide logo in
    .to(".preloader-logo", { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, "-=0.25")

    // Hold
    .to({}, { duration: 0.75 })

    // Slide preloader and logo out
    .to(".preloader", { x: "100%", duration: 0.75, ease: "power2.inOut" })
    .to(".preloader-logo", { x: 100, opacity: 0, duration: 0.5, ease: "power2.in" }, "-=0.5")

    // Hide preloader from DOM flow
    .set(".preloader", { display: "none" });
}

function initSplitTextAnimations() {
  document.querySelectorAll(".gsap-split").forEach((el) => {
    const type = el.dataset.split || "lines";
    const split = new SplitText(el, {
      type,
      linesClass: "split-line",
      wordsClass: "split-word",
      charsClass: "split-char"
    });

    const targets = split[type];

    gsap.from(targets, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });
}

// Run everything
document.addEventListener("DOMContentLoaded", function () {
  runPreloader().add(initSplitTextAnimations);
});
