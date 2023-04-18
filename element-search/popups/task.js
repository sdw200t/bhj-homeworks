const main = document.querySelector("#modal_main")
const success = document.querySelector(".show-success")
const mainGood = document.querySelector("#modal_success")
const closeX = document.querySelectorAll(".modal__close_times")

main.classList = "modal modal_active"

success.onclick = () => {
    mainGood.classList = "modal modal_active"    
}

closeX.forEach( x => {
    x.onclick = () => {
        main.classList = "modal"
        mainGood.classList = "modal"    
    }
})