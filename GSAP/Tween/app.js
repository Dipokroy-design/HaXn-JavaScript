gsap.fromTo(
  ".box",
  {
    x: 60,
    opacity: 0,
  },
  {
    x: -60,
    opacity: 1,
    borderRadius: 0,
    duration: 3,
    repeat: -1,
    yoyo: true,
  }
);
