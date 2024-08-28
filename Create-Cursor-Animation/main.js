var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image")

// mouse move
main.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 1,
        ease: "back.out(2)",
        duration: 0.6,
    })
})

// mouse enter
imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "view More";
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff8a"
    })
})

// mouse leave
imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"

    })
})