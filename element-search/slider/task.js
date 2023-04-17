let currentitem = 0
const slider__item = document.querySelectorAll('.slider__item')
const arr = Array.from(slider__item)
//console.log(arr)

const slider__arrow_next = document.querySelector('.slider__arrow_next')
slider__arrow_next.onclick = () => {
    const lastitem = currentitem
    if (currentitem == arr.length-1) {
        currentitem = 0
    } else {
        currentitem++
    }
    arr[lastitem].classList = 'slider__item'
    arr[currentitem].classList = 'slider__item slider__item_active'
}

const slider__arrow_prev = document.querySelector('.slider__arrow_prev')
slider__arrow_prev.onclick = () => {
    const lastitem = currentitem
    if (currentitem == 0) {
        currentitem = arr.length-1
    } else {
        currentitem--
    }
    arr[lastitem].classList = 'slider__item'
    arr[currentitem].classList = 'slider__item slider__item_active'    
}


