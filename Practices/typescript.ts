// inferencia
//como a y b infiere que son number sin decirle nada
const a = 1
const b = 2
const c = a + b
// c también será number

let cadenadetexto = 'hola'

// ❌cadenadetext.toLocaleLowerCase()
// ❌cadenatexto.propiedadInexistente

// ANY
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

//function saludar({ name, age }: { name: string, age: number }): number { ✅ porque especificamos number, que es el age, que realmente devolverá el return
//    console.log(`Hola ${name}, tienes ${age} años`)
//    return age
//}

//function saludar({ name, age }: { name: string, age: number }): string { ❌ porque especificamos string, que NO es el age, que realmente devolverá el return
//    console.log(`Hola ${name}, tienes ${age} años`)
//    return age
//}

//const sayHiFromFunction = (fn) => {
//    fn('Rick')
//}

//sayHiFromFunction((name) => {
//    console.log(`Hola ${name}`)
//})

//TIPAR ARROW FUNCTION
//FORMA 1º
//const sumar = (a: number, b: number): number => {
//    return a + b
//}

//FORMA 2ª
//const restar: (a: number, b: number) => number = (a, b) => {
//    return a - b
//}

// NEVER (nunca devolverá nada, cuando sabemos que hay funciones que nunca devolverán nada)
//function throwError(message: string): never {
//    throw new Error(message);
//}

// VOID (forma de indicar que realmente la función PUEDE devolver un valor, lo que nos permite es que diferentes funciones nos sirvan)
//function logMessage(message: string): void {
//    console.log(message)
//}

// inferencia funciones anonimas sgun el contexto
//const avengers = ['Spidey', 'Hulk', 'Avengers']

//avengers.forEach(function (avenger) {
//    console.log(avenger.toUpperCase())
//})

//OBJETOS 
//let hero = {
//    name: 'Thor',
//    age: 1500
//};

//function createHero(name: string, age: number) {
//    return {name, age}
//}

//const thor = createHero('Thor', 1500)

// TYPE ALIAS

type Hero = {
    name: string
    age: number
}
let hero: Hero = {
    name: 'Thor',
    age: 1500
};

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {name, age}
}

const thor = createHero({ name: 'Thor', age: 1500})

