const span = document.getElementById('timer')
let date = new Date()
let count = date.getSeconds()
var refreshId = setInterval(() => {
    count -= 1
    span.textContent = count 
    if (count == 0) {
        alert("Вы победили в конкурсе")
        clearInterval(refreshId)
    }
}, 1000)