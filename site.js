function dynamicWelcome() {
    const hours = new Date().getHours() // get the current hour

    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?

    const message = document.querySelector("#welcome > p")
    if (isMorning == true) {
        message.textContent = "Good Morning! Welcome you to my website!"
    }
    else if (isAfternoon == true) {
        message.textContent = "Good Afternoon! Welcome you to my website!"
    }
    else if (isEvening == true) {
        message.textContent = "Good Evening! Welcome you to my website!"
    }
}

dynamicWelcome()