const main = document.querySelector('#modal_main')
const success = document.querySelector('.show-success')
const main_good = document.querySelector('#modal_success')
const close_x = document.querySelectorAll('.modal__close_times')

main.classList = "modal modal_active"

success.onclick = () => {
    main_good.classList = "modal modal_active"    
}

close_x.forEach( x => {
    x.onclick = () => {
        main.classList = "modal"
        main_good.classList = "modal"    
    }
})