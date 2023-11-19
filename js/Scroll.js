gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

window.addEventListener("load", function () {
    let pinBoxes = document.querySelectorAll(".Wrap > *");
    let pinWrap = document.querySelector(".Wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    // Create a timeline
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".card",
            pin: true, // 고정
            scrub: true,
            scrub: 3,
            start: "top top",
            end: "+=200%", // 가로로 100%만큼 움직임
        }
    });

    // Add animations to the timeline
    tl.to(".Wrap", {
        x: "-200%", // 가로로 움직이는 방향
        ease: "none"
    });
    tl.to("#textBox", {
        autoAlpha: 1, // Fade in
        ease: "none"
    }, "-=80%");

    ScrollTrigger.refresh();
});
