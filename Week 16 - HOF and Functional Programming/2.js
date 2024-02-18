function randomNumber() {
    return Math.floor(Math.random() * 100);
}

function mainPower(delayTime) {
    console.log();
    let interaval = setInterval(() => {
        console.log(`${delayTime} to go..`);
        delayTime--;

        if (delayTime === 0) {
            clearInterval(interaval)
            console.log(`Here is the Random Number: ${randomNumber()}`);
        }

    }, 1000);
}

mainPower(5)
