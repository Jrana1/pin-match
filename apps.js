function generatePin() {
    let pin = getValidPin();
    document.getElementById("show-pin").value = pin;
}
/*function getValidPin() {
    let pin = Math.round(Math.random() * 10000);
    if (pin > 999) {
        return pin;
    }
    else {
        return getValidPin();
    }
}*/
function getValidPin() {
    let pin = Math.round(Math.random() * 10000);
    let pinStr = pin + '';
    if (pinStr.length == 4) {
        return pin;
    }
    else {
        return getValidPin();
    }
}
