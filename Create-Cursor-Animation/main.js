var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 1,
        ease: "back.out(2)"
    })
})