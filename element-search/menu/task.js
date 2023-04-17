const menu__link = document.querySelectorAll('.menu__link')
menu__link.forEach( item => {
    item.onclick = () => {
        const menu_sub = item.parentElement.querySelector(".menu_sub")
        if (item.href.indexOf("file") > -1) { 
            if (menu_sub.classList.contains('menu_active')) {
                menu_sub.classList = 'menu menu_sub'
                return false
            } else {
                menu_sub.classList = 'menu menu_sub menu_active'
                return false
            }
        }
    }
})

