function greater() {
    a = Number(num1.value)
    b = Number(num2.value)
    if (a != `` && b != ``) {
        if (a == b) {
            alert(`numbers are same bro`)
        } else if (a > b) {
            alert(`${a} is greater than ${b}`)
        } else {
            alert(`${b} is greater than ${a} `)
        }
    } else {
        alert(`enter a number u fool`)
    }
}