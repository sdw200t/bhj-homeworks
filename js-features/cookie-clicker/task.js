const span = document.getElementById('clicker__counter')

const img = document.getElementById('cookie')
img.onclick = () => {
    let clickcounter = Number(span.textContent) + 1
    span.textContent = clickcounter
    if (clickcounter%2 == 0) {
        img.width += 20
        img.height += 20
    } else {
        img.width -= 20
        img.height -= 20
    }
}
