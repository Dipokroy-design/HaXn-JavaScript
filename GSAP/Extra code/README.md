# GSAP


How to use GSAP in your JavaScript file is 

`gsap.Method( Element/Selector, Object{})`

- This means you first have to write GSAP and then add a method. GSAP has many methods. after writing this, you must add the element you want to animate. Then, start styling with the object

```gsap
gsap.to(".box", {
  x: 100,
  duration: 2,
  repeat: 0,
});
```

This is called Gsap.from / Gsap.fromTo method:-
```gsap
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
```


Learn More about Strangers:-
`gsap.to(“.box”, )`



This is now the Control `Tweens`
- gsap has some of its builtin methods like ( play, pause, restart )
- An example is down below.
```js
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

let tween = gsap.to(".box1", {
  y: -150,
  duration: 5,
  backgroundColor: "teal",
});

play.addEventListener("click", () => tween.play());
pause.addEventListener("click", () => tween.pause());
restart.addEventListener("click", () => tween.restart());
```

## Learn More About Timeline In GSAP 
- an Example is 
```js
let tl = gsap.timeline();

tl.to(".box1", {
  opacity: 0,
  scale: 0,
  duration: 2,
  delay: 1,
})
  .to(".box2", {
    x: -200,
    duration: 2,
  })
  .to(".box3", {
    x: -200,
    borderRadius: 0,
    backgroundColor: "green",
    duration: 2,
  });
```



# Scroll Animtion In GSAP

## Add the link to the HTML page for the scroll animation
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>`

## this is called registerPlugin, 
`gsap.registerPlugin(ScrollTrigger);`
- you have to add this before starting the animation.

After that, you have to add the scrollTrigger in your` gsap.method(“.element”, {obj}).`
`ScrollTrigger: {,}`

This is an element name that you want to animate when users scroll in your website 
`trigger: ".box4"`

Now, come to the main point this is a ToggelAction key 
`toggleActions: "none none none none"`
You can manage the scroll animation by using those parts -` play, pause, restart, resume, reverse, reset, complete, none`
- Play is a default value; it always applies you know that,
- Restart is used when the user scrolls again and again the animation will reanimate again 
- Pause is used to stop the animation when the user scrolls the webpage too fast, the animation will stop, but when the user comes to the exact part again, the animation will stop until the restart animation starts You can use Resume for this solution for more you can also use Reverse animation 
- A resume is used to start the animation, not restart. If the user is scrolling the page too fast, the animation will not be complete in order when the user comes back to that position again; you can show the rest of the animation again by using Resume otherwise, you can also use Reverse for more convenient 
- The reverse is used to reverse the animation.
Explore more in the DOC of GSAP



## Start and End

This means how to trigger the animation and when to start 
`start:"top center",`
-  Top is to trigger the element so that if the component goes up, it will start. If the component goes down, it will start - Top, Bottom also can use Pixel, Percentage, (or relative with top)
- Center means that if the element reaches the center, the animation will start from the center.


You can use the `markers` key to indicate the animation and where it starts or ending 
`markers: true,`


End

By using the `End key`, you can decide when your animation will end 
`end: "bottom center"`
- I have already explained everything same all the things that we are thinking 


Also, Have the `endTrigger` key 
`endTrigger: ".box5"`
`end: "top center"`
- This endTrigger says that if you select box5 and you select the end key top, center, then I will trigger the element to stop the animation from the top of the box5 when it reaches the center of the page as you ordered 


## Scrub In GSAP 
 `scrub: true`
* It means that you can give an element scroll effect when you scroll your page; the animation will be by following your scrolling movement or speed, and you can also modify that by using numbers like 1,2,3,4etc. Those numbers will work like seconds. 



## Pining in GSAP
`pin: true`
    - It means that you can pin any element that you want to pin, and ‘true’ means that if you already have an element that is animating and you want to fix his position, he will animate in the same position that you have given, and it will use this value. It is a great way to animate any kind of element that can stay in her position, and your animation will go on, but it is limited if you set the start and end keys to showcase. For a better example, you can use the method. 
pinSpacing: true,
#### Learn more about this, too.


### Learn More About Snap
snap: 1/ (element.length)
- Go on DOC and learn more about it 





11:35:35
