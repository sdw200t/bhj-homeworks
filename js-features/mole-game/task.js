
window.onload = function() {
    for (let i=1; i<=9; i++){
        let hole = document.getElementById('hole'+i)
        hole.onclick = () => {
            const dead = document.getElementById("dead")
            const lost = document.getElementById("lost")
            if (hole.className == "hole hole_has-mole"){
                dead.textContent = Number(dead.textContent) + 1
            } else {
                lost.textContent = Number(lost.textContent) + 1
            }
            if (lost.textContent == "5") {
                alert("Вы проиграли")
                dead.textContent = "0"
                lost.textContent = "0"
            }
            if (dead.textContent == "10") {
                alert("Вы победили")
                dead.textContent = "0"
                lost.textContent = "0"
            }        
        }
    }
}

