let pin;
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
    pin = Math.round(Math.random() * 10000);
    let pinStr = pin + '';
    if (pinStr.length == 4) {
        return pin;
    }
    else {
        return getValidPin();
    }

}
document.getElementById("key-board").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("calScreen");
    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = "";
        }
        if (number == "Submit") {
            if (calcInput.value == pin) {
                document.getElementById("success").style.display = "block";
                document.getElementById("failure").style.display = "none";
            }
            else {
                document.getElementById("failure").style.display = "block";
                document.getElementById("success").style.display = "none";

            }
        }

    }
    else {
        const previousNumber = calcInput.value;
        const newNUmber = previousNumber + number;
        calcInput.value = newNUmber;
    }

})
