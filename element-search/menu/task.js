const menuLink = document.querySelectorAll(".menu__link")
menuLink.forEach( item => {
    item.onclick = () => {
        const menuSub = item.parentElement.querySelector(".menu_sub")
        if (item.href.indexOf("file") > -1) { 
            if (menuSub.classList.contains("menu_active")) {
                menuSub.classList = "menu menu_sub"
                return false
            } else {
                menuSub.classList = "menu menu_sub menu_active"
                return false
            }
        }
    }
})

