const elements = document.querySelectorAll(".font-size")
const arr = Array.from(elements)

elements.forEach(element => {
    element.onclick = () => {
        const currentItem = arr.findIndex(item => item.classList.contains("font-size_active"))
        arr[currentItem].classList.remove("font-size_active")
        element.classList.add("font-size_active")
        const content = document.querySelector(".book")
        if (element.getAttribute("data-size") == ""){
            content.classList = "book"
        } else {
            content.classList = "book book_fs-" + element.getAttribute("data-size")
        }
        return false
    }
})

//const size = event.target.dataset.size;
//if (size) {
//  reader.className = `book__content book_fs-${size}`;
//} else {
//  reader.className = "book__content";
//}