// 📓 NEVER ( caso práctico)
function fn(x: string | number) {
    if (typeof x === 'string') {
        // x es string
        x.toUpperCase()
    } else if (typeof x === 'number') {
        // x es Number
        x.toFixed(2)
    } else {
        x // NEVER
    }
}