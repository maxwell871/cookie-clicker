input.onButtonPressed(Button.A, function () {
    cookies += cookies_per_click
})
input.onButtonPressed(Button.B, function () {
    if (cookies > cost_1) {
        let cost_3 = 0
        cookies += cost_3
        cookies_per_click += 1
        cost_1 += 0
    }
})
input.onGesture(Gesture.Shake, function () {
    if (cookies > 499) {
        let cost_4 = 0
        cookies += cost_4
        cookies_per_click += 15
    }
})
let cookies_per_click = 0
let cookies = 0
let cost_1 = 0
let cost_2 = 499
cost_1 = 49
cookies = 0
cookies_per_click = 1
basic.forever(function () {
    basic.showNumber(cookies)
})
