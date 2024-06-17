function render() {
    messageList[messageList.length-1].messageParse()
}


const girlsChatArea = document.getElementById("girls_chat_area")
const girlsInput = document.getElementById("girls_input")
const girlsBtn = document.getElementById("girls_btn")

const doomersChatArea = document.getElementById("doomers_chat_area")
const doomersInput = document.getElementById("doomers_input")
const doomersBtn = document.getElementById("doomers_btn")


let messageList = new Array()



class Message {

    constructor(message, sender) {
        this.message = message
        this.sender = sender
        this.time = new Date().toLocaleTimeString().slice(0, 5)
    }


    messageParse = () => {

        const parsedMessage = (par) => {
            return`<div class="${par}_message">
        <div class="${par}_content">${this.message}<span class="message_time">${this.time}</span></div>
        </div>`
        }

        if (this.sender == "girl") {
            girlsChatArea.insertAdjacentHTML("beforeend", parsedMessage("right"))
            doomersChatArea.insertAdjacentHTML("beforeend", parsedMessage("left"))
        } else {
            girlsChatArea.insertAdjacentHTML("beforeend", parsedMessage("left"))
            doomersChatArea.insertAdjacentHTML("beforeend", parsedMessage("right"))
        }

    }

}


girlsBtn.addEventListener("click", () => {
    if (girlsInput.value == "") {
        alert("Girls input field is empty")
    } else {
        messageList.push(new Message(girlsInput.value, "girl"))
        girlsInput.value = ""
        console.log(messageList)
        render()
    }
})

doomersBtn.addEventListener("click", () => {
    if (doomersInput.value == "") {
        alert("Doomers input field is empty")
    } else {
        messageList.push(new Message(doomersInput.value, "doomer"))
        doomersInput.value = ""
        render()
    }
})