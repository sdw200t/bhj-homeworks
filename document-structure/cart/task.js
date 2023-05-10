const inc = document.querySelectorAll(".product__quantity-control_inc")
inc.forEach(item => {
    item.onclick = () => {
        const parent = item.parentNode
        const value = parent.querySelector(".product__quantity-value")
        value.innerText = Number(value.innerText) + 1
    }
})

const dec = document.querySelectorAll(".product__quantity-control_dec")
dec.forEach(item => {
    item.onclick = () => {
        const parent = item.parentNode
        const value = parent.querySelector(".product__quantity-value")
        if (Number(value.innerText) > 1) {
            value.innerText = Number(value.innerText) - 1
        }
    }
})

const add = document.querySelectorAll(".product__add")
const basket = document.querySelector(".cart__products")
add.forEach(item => {
    item.onclick = () => {
        const prod = item.closest(".product")
        const img = prod.querySelector(".product__image").src
        const arr = Array.from(document.querySelectorAll(".cart__product"))
        let newProd = arr.find(el => el.dataset.id == prod.dataset.id)
        let count = prod.querySelector(".product__quantity-value").innerText
        if (newProd == undefined) {
            newProd = document.createElement('div')
            basket.appendChild(newProd)
        } else {
            count = Number(newProd.querySelector(".cart__product-count").innerText) + Number(count)
        }
        newProd.outerHTML = 
            `<div class="cart__product" data-id="${prod.dataset.id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${count}</div>
            </div>`
}
})