input.onButtonPressed(Button.A, function () {
    basic.showString("Hello World")
    basic.showIcon(IconNames.TShirt)
})
basic.showNumber(256)
basic.forever(function () {
    basic.showString("...")
})
