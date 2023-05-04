const checks = document.querySelectorAll(".interest__check")
checks.forEach(item => {
    if (item.closest(".interests_active") == null){
        item.onclick = () => {
            const parent = item.closest(".interest")
            const childs = parent.querySelectorAll(".interest__check")
            childs.forEach((e) => {
                e.checked = item.checked
            })
        }
    }
})