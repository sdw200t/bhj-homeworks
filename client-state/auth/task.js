const auth = localStorage.getItem('auth')

if (auth) {
    let userid = document.querySelector('#user_id')
    userid.textContent = auth
    let welcome  = document.querySelector('.welcome ')
    welcome.classList.add('welcome_active')
} 

document.forms.signin__form.addEventListener('submit', (e) => {
    e.preventDefault()

    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const json = JSON.parse(xhr.responseText)
            if (json.success == true) {
                let userid = document.querySelector('#user_id')
                userid.textContent = json.user_id
                let welcome = document.querySelector('.welcome ')
                welcome.classList.add('welcome_active')
                localStorage.setItem('auth', json.user_id)
            } else {
                alert('Неверный логин/пароль')
            }
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')

    const formData = new FormData(document.forms.signin__form)

    xhr.send(formData)
})