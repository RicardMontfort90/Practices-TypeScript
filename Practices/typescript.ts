// inferencia
//como a y b infiere que son number sin decirle nada
const a = 1
const b = 2

const c = a + b

let n = 'hola'

n.toLocaleLowerCase()

n = 2
// any
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;