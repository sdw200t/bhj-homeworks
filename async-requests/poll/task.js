
const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const json = JSON.parse(xhr.responseText)
        const title = document.querySelector('.poll__title')
        title.textContent = json.data.title
        const answers = document.querySelector("#poll__answers")
        for (let answer of Object.values(json.data.answers)) {
            let button = document.createElement('button')
            answers.appendChild(button)
            button.outerHTML = 
                `<button class="poll__answer">
                    ${answer}
                </button>`
            button.addEventListener("click", () => confirm('Спасибо, ваш голос засчитан!'))
        }  
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()

