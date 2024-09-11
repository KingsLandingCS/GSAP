function breakText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");

    var halfValue = Math.floor(splittedText.length / 2);
    var clutter = "";

    splittedText.forEach((e, i) => {
        if (i < halfValue) {
            clutter += `<span class="first-half">${e}</span>`
        } else {
            clutter += `<span class="second-half">${e}</span>`
        }
    })

    h1.innerHTML = clutter;

}

breakText();

gsap.from(" .first-half", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})

gsap.from(" .second-half", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})

