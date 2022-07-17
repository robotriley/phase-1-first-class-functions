const receivesAFunction = (callbackFunction) => {
    callbackFunction()
    }

const callbackFunction = () => {
    return "hello"
}

const returnsANamedFunction = () => {
    return namedFunction
}

const namedFunction = () => {
    return "I am named function"
}

const returnsAnAnonymousFunction = (num1) => {
    return (num2) => {
        return num1 + num2
    }
}