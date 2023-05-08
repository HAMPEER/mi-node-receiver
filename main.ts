radio.onReceivedNumber(function (receivedNumber) {
    mode = receivedNumber
    if (minode.switchIsOpened(ConnName.A0)) {
        led.plotBarGraph(
        receivedNumber,
        diagram
        )
    }
})
let diagram = 0
let mode = 0
mode = 0
radio.setGroup(255)
basic.forever(function () {
    if (mode == 0) {
        diagram = 35
    } else if (mode == 1) {
        diagram = 5
    } else if (mode == 2) {
        diagram = 100
    } else if (mode == 3) {
        diagram = 1023
    }
})
