const tasks = document.querySelector(".tasks__list")

let task = 
    `<div class="task">
        <div class="task__title">
            шаблон
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`

function delElem(elem) {
    elem.currentTarget.parentNode.remove()
}

const input = document.querySelector(".tasks__input")
const btn = document.querySelector(".tasks__add")
btn.addEventListener('click', (e) => {
    if (input.value.trim() != "") {    
        let div = document.createElement('div')
        tasks.appendChild(div)
        div.innerHTML = task.replace('шаблон', input.value.trim())
        e.preventDefault()
        input.value = ''
        let remove = div.querySelector('.task__remove')
        remove.addEventListener('click', delElem)
    }
})