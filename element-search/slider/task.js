//let currentItem = 0
const sliderItem = document.querySelectorAll(".slider__item")
const arr = Array.from(sliderItem)

const sliderArrowNext = document.querySelector(".slider__arrow_next")
sliderArrowNext.onclick = () => {
    let currentItem = arr.findIndex(item => item.classList.contains("slider__item_active"))
    const lastItem = currentItem
    if (currentItem == arr.length-1) {
        currentItem = 0
    } else {
        currentItem++
    }
    arr[lastItem].classList = "slider__item"
    arr[currentItem].classList = "slider__item slider__item_active"
}

const sliderArrowPrev = document.querySelector(".slider__arrow_prev")
sliderArrowPrev.onclick = () => {
    let currentItem = arr.findIndex(item => item.classList.contains("slider__item_active"))
    const lastItem = currentItem
    if (currentItem == 0) {
        currentItem = arr.length-1
    } else {
        currentItem--
    }
    arr[lastItem].classList = "slider__item"
    arr[currentItem].classList = "slider__item slider__item_active"    
}


