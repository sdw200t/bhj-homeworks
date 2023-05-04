const widget = document.querySelector(".chat-widget")
widget.addEventListener("click", () => {
    widget.classList.add("chat-widget_active")
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const botMessages = [
    "Привет",
    "Пффф, вот еще!",
    "Что надо то?",
    "Дома нет никто!",
    "Извините, не расслышал...",
    "Маловероятно, то Вы нас заинтересуете",
    "У нас то всё хорошо, а у Вас?",
    "Ну это, как бы я бот... чего Вы хотите от бота добиться?",
    "Напишите завтра!",
    "Я передам Ваше послание...",
    "Ваше сообщение почему-то стёрлось в моем чате...",
    "У нас уже закрыто!",
    ];

const input = document.querySelector(".chat-widget__input")
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && input.value.trim() != "") {
        const messages = document.querySelector( '.chat-widget__messages' );
        let date = new Date()
        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
              ${input.value.trim()}
            </div>
          </div>`;    
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
              ${botMessages[getRandomInt(botMessages.length)]}
            </div>
          </div>`;  
        input.value = ""  
    }    
})