//Write your code here
const input = require('sync-input');

class CurRates {
    constructor() {
        this.currencies = {"USD": 1, "JPY": 113.5, "EUR": 0.89, "RUB": 74.36, "GBP": 0.75}
    }
}

class Currencies {
    constructor(from, to, amount) {
        this.currencies = new CurRates().currencies
        this.to = to
        this.from = from
        this.amount = amount
        this.fromInUsd = parseFloat(this.amount / this.currencies[from]).toFixed(4)
        console.log(this.fromInUsd)
        this.rate = parseFloat(this.currencies[to])
    }

    result() {
        return parseFloat(this.fromInUsd * this.rate).toFixed(4)
    }

}


// Ablauf
console.log("Welcome to Currency Converter!");
console.log("1 USD equals  1 USD");
console.log("1 USD equals  113.5 JPY");
console.log("1 USD equals  0.89 EUR");
console.log("1 USD equals  74.36 RUB");
console.log("1 USD equals  0.75 GBP");


function main() {
    console.log("What do you want to do?");
    askForAction();


}

function askForAction() {
    console.log("1-Convert currencies 2-Exit program")
    let action = Number(input())
    switch (action) {
        case 1: {
            convert()
            break;
        }
        case 2: {
            console.log("Have a nice day!")
            break;
        }
        default: {
            console.log("Unknown currency")
        }
    }
}

function inputTo() {
    return input("To: ").toUpperCase()
}

function inputFrom() {
    return input("From: ").toUpperCase()

}

function inputAmount() {
    return Number(input("Amount: "))
}

function convert() {
    // Input From
    let check = false
    let from;
    while (check === false) {
        from = inputFrom()
        check = checkInputCurrencies(from)
    }


    // input to
    check = false
    let to;
    while (check === false) {
        to = inputTo()
        check = checkInputCurrencies(to)
    }

// Input amount
    check = false
    let amount;
    while (check === false) {
        amount = inputAmount();
        check = checkInputAmount(amount)
    }

    let cur = new Currencies(from, to, amount)
    console.log("Result: " + cur.amount + " " + cur.from + " equals " + cur.result() + " " + cur.to)
    askForAction();
}


function checkInputCurrencies(currency) {
    if (currency in new CurRates().currencies) {
        return true
    } else {
        console.log("Unknown currency")
        return false
    }
}

function checkInputAmount(amount) {
    let result = false
    if (isNaN(amount)) {
        console.log("The amount has to be a number")
        return false
    }
    if (amount < 1) {
        console.log("The amount can not be less than 1")
        return false
    } else {
        result = true
        return result
    }
}

main()