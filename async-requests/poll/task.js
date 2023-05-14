function mess(vote, answer) {
    alert('Спасибо, ваш голос засчитан!')

    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) { 
            const json = JSON.parse(xhr.responseText)
            const answers = document.querySelector("#poll__answers")
            answers.remove()
            const poll = document.querySelector('.poll')
            let div = document.createElement('div')
            poll.appendChild(div)
            for (let stat of json.stat) {
                div.innerHTML += `<div>${stat.answer}: ` + `${stat.votes}%</div>` 
            }
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.send(`vote=${vote}&answer=${answer}`)
}

const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const json = JSON.parse(xhr.responseText)
        const title = document.querySelector('.poll__title')
        title.textContent = json.data.title
        const answers = document.querySelector("#poll__answers")
        const arr = Object.values(json.data.answers)
        for (let answer of arr) {
            let button = document.createElement('button')
            answers.appendChild(button)
            button.outerHTML = 
                `<button class="poll__answer" onclick="mess(${json.id}, ${arr.indexOf(answer)})">
                    ${answer}
                </button>`
            //Почему не работает?
            //button.addEventListener("click", () => {alert('Спасибо, ваш голос засчитан!')})
        }  
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()

