const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const json = JSON.parse(xhr.responseText)
        const items = document.querySelector('#items')
        for (let valute of Object.values(json.response.Valute)) {
            let divItem = document.createElement('div')
            divItem.classList.add('item')
            items.appendChild(divItem)
            divItem.innerHTML = 
                `<div class="item__code">
                    ${valute.CharCode}
                </div>
                <div class="item__value">
                    ${valute.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`
        }  
        const loader = document.querySelector('#loader')
        loader.classList.remove('loader_active')      
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

