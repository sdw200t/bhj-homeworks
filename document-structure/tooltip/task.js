const ttip = document.querySelectorAll(".has-tooltip")
arrHelp = []
ttip.forEach(elem => {
    elem.onclick = () => {
        const rect = elem.getBoundingClientRect()
        let help = arrHelp.find(el => el.innerText == elem.title)
        if (help == undefined) {
            help = document.createElement("div")
            help.classList.add('tooltip')    
            help.innerText = elem.title  
            elem.insertAdjacentElement("afterend", help)
            help.style.left = `${rect.left}px`
            help.style.top = `${rect.top + 20}px`
            arrHelp.push(help) 
        }     
        if (help.classList.contains('tooltip_active')){
            help.classList.remove('tooltip_active')
        } else {
            help.classList.add('tooltip_active')
        }
        return false
    }
})