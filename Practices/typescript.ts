// 📓INFERENCIA
//como a y b infiere que son number sin decirle nada
const a = 1
const b = 2
const c = a + b
// c también será number

let cadenadetexto = 'hola'

// ❌cadenadetext.toLocaleLowerCase()
// ❌cadenatexto.propiedadInexistente

// 📓ANY
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// 📓functions 
/*function saludar(name: string) {
    console.log(`Hola ${name}`)
    }
*/
//✅ saludar('Manu')
//❌saludar(2) Argument of type 'number is not assignable to parameter of type 'string'. (esto sucede porque especificamos previamente (name: string) )

// 💻FORMA Nª1
/*function saludar({ name, age }: { name: string, age: number }) {
    console.log(`Hola ${name}, tienes ${age} años`)
} 
*/

//saludar({ name: 'Rick', age: 33 })

// 💻FORMA Nª2
/*function saludar2(persona: { name: string, age: number }) {
    const { name, age } = persona
    console.log(`Hola ${name}, tienes ${age} años`)
}
*/

//saludar2({ name: 'Rick', age: 33 })

/*function saludar({ name, age }: { name: string, age: number }): number { ✅ porque especificamos number, que es el age, que realmente devolverá el return
    console.log(`Hola ${name}, tienes ${age} años`)
    return age
}
*/

/*function saludar({ name, age }: { name: string, age: number }): string { ❌ porque especificamos string, que NO es el age, que realmente devolverá el return
    console.log(`Hola ${name}, tienes ${age} años`)
    return age
}
*/

/*const sayHiFromFunction = (fn) => {
    fn('Rick')
}
*/

/*sayHiFromFunction((name) => {
    console.log(`Hola ${name}`)
})
*/

//📓TIPAR ARROW FUNCTION
//💻FORMA 1º
//const sumar = (a: number, b: number): number => {
//    return a + b
//}

//💻FORMA 2ª
//const restar: (a: number, b: number) => number = (a, b) => {
//    return a - b
//}

//📓NEVER (nunca devolverá nada, cuando sabemos que hay funciones que nunca devolverán nada)
//function throwError(message: string): never {
//    throw new Error(message);
//}

//📓VOID (forma de indicar que realmente la función PUEDE devolver un valor, lo que nos permite es que diferentes funciones nos sirvan)
//function logMessage(message: string): void {
//    console.log(message)
//}

// inferencia funciones anonimas sgun el contexto
//const avengers = ['Spidey', 'Hulk', 'Avengers']

//avengers.forEach(function (avenger) {
//    console.log(avenger.toUpperCase())
//})

//📓OBJETOS 
//let hero = {
//    name: 'Thor',
//    age: 1500
//};

//function createHero(name: string, age: number) {
//    return {name, age}
//}

//const thor = createHero('Thor', 1500)

//📓TYPE ALIAS
/*
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
*/

//📓OPTIONAL PROPERTIES

/*type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
}
let hero: Hero = {
    name: 'Thor',
    age: 1500
};

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name, 
        age, 
        isActive:true 
    }
}

const thor = createHero({ name: 'Thor', age: 1500 })
*/

//📓template union types
/*
type HexadecimalColor = `#${string}`

const color: HexadecimalColor = '0033ff' // hexadecimales ❌
const color2: HexadecimalColor = '#0033ff' // hexadecimales ✅
*/

//📓UNION TYPES 
/*type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScale
}
let hero: Hero = {
    name: 'Thor',
    age: 1500
};

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name, 
        age, 
        isActive:true 
    }
}

const thor = createHero({ name: 'Thor', age: 1500 })
thor.powerScale = 'planetary'
*/

//📓INTERSECTION TYPES 
/*
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type HeroBasicInfo = {
    name: string,
    age: number,
}

type HeroProperties = {
    readonly id?: HeroId
    isActive?: boolean
    powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties

let hero: Hero = {
    name: 'Thor',
    age: 1500
};

function createHero(input: HeroBasicInfo): Hero {
    const { name, age } = input
    return {
        id: crypto.randomUUID(),
        name, 
        age, 
        isActive:true 
    }
}

const thor = createHero({ name: 'Thor', age: 1500 })
thor.powerScale = 'planetary'
*/

//📓TYPE INDEXING
/*
type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Madrid'
}
*/

//📓TYPE FROM VALUE
/*
const address = {
    planet: 'Earth',
    city: 'Madrid'
}

type Address = typeof address

const addressTwitch: Address = {
    planet: 'Mars',
    city: 'Twitch'
}
*/

//📓TYPE FROM FUNCTION RETURN
/*
function createAddress() {
    return {
        planet: 'Tierra',
        city: 'Barcelona'
    }
}

type Address = ReturnType<typeof createAddress>
*/

//📓ARRAYS
/*
const langueges: (string | number)[] = [] 

langueges.push('JavaScript')  // ✅ ha detectado un string, es una de las opciones, es correcto
langueges.push(2)             // ✅ ha detectado un number, es una de las opciones, es correcto
langueges.push(true)          // ❌ ha detectado un boolean, NO es una de las opciones, NO ES CORRECTO!!
*/

/*
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type HeroBasicInfo = {
    name: string,
    age: number,
}

const heroesWithBasicInfo: HeroBasicInfo[] = []
*/
//📓TUPLES (tamaño fijo que tendrá el Array)
/* Juego del 3 en raya
[
    ['X', 'O', 'X'], // <- string []
    ['O', 'X', 'O'], // <- string []
    ['X', '', 'O']   // <- string []
    
]
*/
/*
type CellValue = 'X' | 'O' | ''
type GameBoard = [
    [CellValue, CellValue, CellValue ],
    [CellValue, CellValue, CellValue ],
    [CellValue, CellValue, CellValue ]
]
*/

/* matrix de 3 x 3
const gameBoard: CellValue[][] = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'], 
    ['X', '', 'O']
]

type RGB = [number, number, number]
const rgb: RGB = [2, 5, 6]               // ✅ el Array, ha detectado los 3 números
const rgb2: RGB = [2, 5]                 // ❌ el Array, ha detectado SOLO 2 números, y espera 3
const rgb3: RGB = [2, 5, 6, 'FATALITY']  // ❌ el Array, ha detectado los 3 números + un string no declarado previamente

rgb.push(4)  // OJO! esto hace que ahora const rgb tenga 4 en lugar de 3, y esto puede ser un posible Problema!
*/

//📓ENUMS ( lo usamos para datos que són FINITOS ejemplo: un calendario, tipos de errores, tipos de viviendas)

//💻 Esto sería en TypeScript, usaremos Enums
/*
enum ERROR_TYPES  { // si aplicamos "const enum" generará menos código en JavaScript, pero solo se consumirá desde dentro. Poniendo solo "enum" generamos más código pero al usar librias o se consume desde fuera, usarlo así.
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}

function mostrarMensaje (tipoDeError) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permisos para acceder')
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para acceder')
    }
}
*/

//💻Esto sería con JavaScript
/*
const ERROR_TYPES = {
    NOT_FOUND: 'notFound',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden'
}

function mostrarMensaje (tipoDeError) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permisos para acceder')
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para acceder')
    }
}
*/

// 📓ASERCIONES DE TIPOS
/*
const canvas = document.getElementById('span')

if (canvas instanceof HTMLCanvasElement) {  // deduciendo que canvas es un HTMLCanvasElement
    // JavaScript está ejecutando el código de la condición
    const ctx = canvas.getContext('2d')
}

// typeof --> para tipos
// instanceof --> para instancias
*/

