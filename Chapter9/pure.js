// What is Pure Function?

    // `* It Returns the same result if given the same arguments`
    // `* It does not cause any observable side effects`


function sqr(x,n) {
    return x**n
}

console.log(sqr(3,3))
console.log(sqr(6,2))
console.log(sqr(3,4))

var n = 10

function change() {
    n = 100
}
change()
console.log(n)

var point = {
    x: 45,
    y: 30
}

function printPoint(point) {
    point.x = 100
    point.y = 200

    console.log(point)
}

printPoint(point)

console.log(point)