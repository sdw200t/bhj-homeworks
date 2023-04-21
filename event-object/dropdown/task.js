const value = document.querySelector(".dropdown__value")
const list = document.querySelector(".dropdown__list")
const link = document.querySelectorAll(".dropdown__link")

value.onclick = () => {
    list.classList = "dropdown__list dropdown__list_active"
}

link.forEach(item => {
    item.onclick = () => {
        value.innerText = item.innerText
        list.classList = "dropdown__list"
        return false
    }
})