let showingResult = false
let a = 0
let operation = 0
let result = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    if (showingResult) {
        return
    }
    a += 1
    basic.showNumber(a)
})
input.onGesture(Gesture.Shake, function () {
    if (operation == 0) {
        result = a + b
    }
    if (operation == 1) {
        result = a - b
    }
    if (operation == 2) {
        result = a * b
    }
    if (operation == 3) {
        if (b == 0) {
            basic.showString("ERR")
            return
        } else {
            result = Math.idiv(a * 100, b) / 100
        }
    }
    showingResult = true
    basic.showNumber(result)
})
input.onButtonPressed(Button.AB, function () {
    if (showingResult) {
        return
    }
    operation = (operation + 1) % 4
    showOperation()
})
input.onButtonPressed(Button.B, function () {
    if (showingResult) {
        return
    }
    b += 1
    basic.showNumber(b)
})
function showOperation () {
    if (operation == 0) {
        basic.showString("+")
    }
    if (operation == 1) {
        basic.showString("-")
    }
    if (operation == 2) {
        basic.showString("x")
    }
    if (operation == 3) {
        basic.showString("/")
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    a = 0
    b = 0
    result = 0
    showingResult = false
    basic.clearScreen()
})
basic.forever(function () {
	
})
