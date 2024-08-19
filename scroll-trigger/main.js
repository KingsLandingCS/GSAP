// gsap.from("#page2 h1", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroll: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     x: -500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroll: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })

gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    rotate: 720,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})