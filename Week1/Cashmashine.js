//type pin
//check balance
// get cash
//receipt
// alert("hi")
let userbalance = 25
let userPin = 1234
let accountNumber = 987654321
let optionChoice = 1
let moneyOut = 10
let userInput;

const checkPin = (userInput) => {
    userInput = prompt(`Please enter your pin`)
    // console.log(userInput)
    if (userInput == userPin) {
        alert("Pin accepted ")
        optionScreen()
    } else {
        alert("Please enter the right pin")
        checkPin()
    }
}


const optionScreen = () => {
    userInput = prompt(` Hello, what feature would you like to use today? \n Option 1: Check Balance \n Option 2: Withdraw Cash \n Option 3: Deposit Cash \n Option 4: Change Pin \n Option 5: Cancel `)
    // userInput = prompt(`What option would you like to access`)
    switch (userInput) {
        case "1":
            checkBalance()
            break;
        case "2":
            getCash()
            break;
        case "3":
            depositCash()
            break;
        case "4":
            changePin()
            break;
        case "5":
            cancelPls()
            break;
        default:
            alert("Please enter a valid option choice ")
            optionScreen()
        // alert("error");

    }
}

const checkBalance = () => {
    alert(`Your balance is £${userbalance}.`)
    otherFeature()
}


const otherFeature = () => {
    userInput = prompt(`Would you like to access any other feature?`)
    if (userInput == "yes") {
        optionScreen()
    } else if (userInput == "no") {
        cancelPls()
    } else {
        alert("Please write either yes or no")
        otherFeature()
    }
}

const getCash = () => {
    // console.log(`How much money would you like to withdraw?`)
    userInput = prompt(`How much money would you like to withdraw?`)
    if (userInput < 0) {
        alert(`That is not positive a positive number, please try again.`)
        getCash()
    } else {

    }
    if (userInput < userbalance) {
        alert(`We are processing your request... \n\n Request Approved \n Dispensing £${userInput} `)
        userbalance -= userInput
        alert(`Your new balance is £${userbalance}.`)
        otherFeature()

    } else if (userInput > userbalance) {
        alert(`Sorry transaction could not be completed due to insufficient funds. Would you like to access another feature today?`)
        otherFeature()
    }

}

const depositCash = () => {
    userInput = prompt(`How much money are you depositing?`)
    if (typeof userInput === Number) {

    } else {
        alert(`That was not a number.Please try again`)
depositCash()
    }

    if (userInput < 0) {
        alert("Please trt again with a positive number.")
        depositCash()
    } else {

    }
    userbalance += parseInt(userInput)
    alert(`Your new balance is £${userbalance}.`)
    otherFeature()
}



const changePin = () => {
    userInput = prompt("please enter your Pin")
    if (userInput == userPin) {
        userPin = prompt("Please enter your NEW PIN")
        // alert("Your Pin has been changed")
        // otherFeature()
        if (userPin.length != 4 && isNaN(userPin === true)) {
            console.log("1")
            alert("Please Re-enter a New pin with 4 numbers")
            changePin()
        } else {
            console.log("2")
            alert("Your PIN has been changed")
            otherFeature()
        }
    }else{
        console.log("3")
        alert("Your PIN did not match- please try again.")
        changePin()
    }
}








const cancelPls = () => {
    userInput = prompt(`Are you sure you want to exit?`)
    if (userInput === "yes") {
        alert(`Goodbye`)

    } else {
        optionScreen()

    }
}
checkPin()

