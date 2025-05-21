gsap.registerPlugin(SplitText, ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".gsap-split").forEach((el) => {
    el.style.overflow = "hidden";
    const split = new SplitText(el, { type: "lines", linesClass: "split-line" });

    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
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
});
