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

let pattern = 
    `<div class="cart__product" data-id="dataID">
        <img class="cart__product-image" src="prodImage">
        <div class="cart__product-count">prodCount</div>
    </div>`

const add = document.querySelectorAll(".product__add")
const basket = document.querySelector(".cart__products")
//let arr = []
add.forEach(item => {
    item.onclick = () => {
        const prod = item.closest(".product")
        const img = prod.querySelector(".product__image").src
        const count = prod.querySelector(".product__quantity-value").innerText
        const arr = Array.from(document.querySelectorAll(".cart__product"))
        let newProd = arr.find(el => el.dataset.id == prod.dataset.id)
        if (newProd == undefined) {
            newProd = document.createElement('div')
            basket.appendChild(newProd)
            newProd.outerHTML = pattern.replace("dataID", prod.dataset.id).replace("prodImage", img).replace("prodCount", count)
            //arr.push(newProd)
        } else {
            newProd.outerHTML = pattern.replace("dataID", 
                prod.dataset.id)
                .replace("prodImage", img)
                .replace("prodCount", Number(newProd.querySelector(".cart__product-count").innerText) + Number(count))
        }
    }
})