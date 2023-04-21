const tab = document.querySelectorAll(".tab")
const arrTab = Array.from(tab)
const tabContent = document.querySelectorAll(".tab__content")
const arrTabContent = Array.from(tabContent)

tab.forEach(item => {
    item.onclick = () => {
        let tabActive = arrTab.findIndex(item => item.classList.contains("tab_active"))
        arrTab[tabActive].classList = "tab"
        arrTabContent[tabActive].classList = "tab__content"

        item.classList = "tab tab_active"
        arrTabContent[arrTab.indexOf(item)].classList = "tab__content tab__content_active"
    }
})