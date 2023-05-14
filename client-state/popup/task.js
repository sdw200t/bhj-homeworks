function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(name + '='))
    if (cookie == undefined) {
        return cookie
    }
    return cookie.substring(name.length + 1)
}

if (getCookie('closepop') == undefined) {
    const main = document.querySelector("#subscribe-modal")
    const closeX = document.querySelector(".modal__close_times")
    
    main.classList.add("modal_active")
    
    closeX.onclick = () => {
        main.classList.remove("modal_active")
        setCookie('closepop', true)
    }
} 