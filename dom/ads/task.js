const elements = document.querySelectorAll(".rotator__case")
let number = 0

let timerId = setTimeout(function tick() {
    if (number == elements.length-1){
        elements[number].classList.remove("rotator__case_active")
        number = 0
    } else {
        elements[number].classList.remove("rotator__case_active")
        number++
    }
    elements[number].classList.add("rotator__case_active")
    elements[number].style.color = elements[number].getAttribute("data-color")
    timerId = setTimeout(tick, Number(elements[number].getAttribute("data-speed")))
}, 1000)

