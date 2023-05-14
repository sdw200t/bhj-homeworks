const storedText = localStorage.getItem('text')
const editor = document.querySelector('#editor')
editor.addEventListener('keyup', () => {
    localStorage.setItem('text', editor.value)
})

if (storedText) {
    editor.value = storedText
} 

const card = document.querySelector('.card')
let btn = document.createElement('input')
btn.type = 'button'
btn.value = 'Clear'
btn.addEventListener('click', () => {
    editor.value = ''
})
card.appendChild(btn)