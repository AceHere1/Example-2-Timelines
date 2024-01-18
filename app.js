let tl = gsap.timeline({
    default: {
        duration: 1,
    }
}).to("h1", {
    y: -100,
    color: "white",
}).to(".box1", {
    x: -100,
    backgroundColor: "#5e4432",
}).to(".box2", {
    y: 100,
    backgroundColor: "#4b7538",
}).to(".box3", {
    x: 100,
    backgroundColor: "#2e4672",
})