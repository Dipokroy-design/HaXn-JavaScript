gsap.set(".box", {
  borderRadius: 100,
});
gsap.to(".box", {
  borderRadius: 0,
  opacity: 1,
  y: -100,
  duration: 3,
  repeat: -1,
  yoyo: true,
  stagger: {
    amount: 2,
    each: 0.5,
    from: 0,
  },
});
