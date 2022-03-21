let secondsIncrement = 1000;

igniteClock();

function igniteClock() {
    const currentDate = new Date();

    const clockHoursValue = ((currentDate.getHours() + 11) % 12 + 1);
    const clockMinutesValue = currentDate.getMinutes();
    const clockSecondsValue = currentDate.getSeconds();

    const secondsFinalValue = clockSecondsValue * 6;
    const minutesFinalValue = clockMinutesValue * 6;
    const hoursFinalValue = clockHoursValue * 30;

    document.querySelector('.clockHours').style.transform = `rotate(${hoursFinalValue}deg)`;
    document.querySelector('.clockMinutes').style.transform = `rotate(${minutesFinalValue}deg)`;
    document.querySelector('.clockSeconds').style.transform = `rotate(${secondsFinalValue}deg)`;
}

setInterval(igniteClock, secondsIncrement);