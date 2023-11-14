// inferencia
//como a y b infiere que son number sin decirle nada
const a = 1
const b = 2
const c = a + b
// c también será number

let cadenadetexto = 'hola'

// ❌cadenadetext.toLocaleLowerCase()
// ❌cadenatexto.propiedadInexistente

// any
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// functions 
//function saludar(name: string) {
//    console.log(`Hola ${name}`)
//}

//✅ saludar('Manu')
//❌saludar(2) Argument of type 'number is not assignable to parameter of type 'string'. (esto sucede porque especificamos previamente (name: string) )

// FORMA Nª1
//function saludar({ name, age }: { name: string, age: number }) {
//    console.log(`Hola ${name}, tienes ${age} años`)
//}

//saludar({ name: 'Rick', age: 33 })

// FORMA Nª2
//function saludar2(persona: { name: string, age: number }) {
//    const { name, age } = persona
//    console.log(`Hola ${name}, tienes ${age} años`)
//}

//saludar2({ name: 'Rick', age: 33 })