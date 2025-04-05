gsap.registerPlugin(ScrollTrigger);
gsap.to(".box4", {
  scrollTrigger: {
    trigger: ".box4",
    start: "top center",
    endTrigger: ".box5",
    end: "top 60%",
    scrub: 2,
    pin: true,
    // pinSpacing: true,
    markers: true,
    toggleActions: "restart pause reverse pause",
  },
  x: 650,
  rotation: 360,
  duration: 4,
});
// 17:47