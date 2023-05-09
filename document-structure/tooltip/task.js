const ttip = document.querySelectorAll(".has-tooltip")
const arr = Array.from(ttip)
arrHelp = []
ttip.forEach(elem => {
    let help = document.createElement("div")
    help.className = 'tooltip'    
    help.innerText = elem.title  
    elem.appendChild(help)
    arrHelp.push(help)  
    elem.onclick = () => {
        if (arrHelp[arr.indexOf(elem)].classList.contains('tooltip_active')){
            arrHelp[arr.indexOf(elem)].classList = 'tooltip'
        } else {
            arrHelp[arr.indexOf(elem)].classList = 'tooltip_active'
        }
        return false
    }
})