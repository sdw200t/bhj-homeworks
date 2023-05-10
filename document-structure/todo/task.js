const tasks = document.querySelector(".tasks__list")

function delElem(elem) {
    elem.currentTarget.parentNode.remove()
}

const input = document.querySelector(".tasks__input")
const btn = document.querySelector(".tasks__add")
btn.addEventListener('click', (e) => {
    if (input.value.trim() != "") {
        let div = document.createElement('div')
        tasks.appendChild(div)
        div.innerHTML =
            `<div class="task">
                <div class="task__title">
                    ${input.value.trim()}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
        input.value = ''
        let remove = div.querySelector('.task__remove')
        remove.addEventListener('click', delElem)
    }
    e.preventDefault()
})