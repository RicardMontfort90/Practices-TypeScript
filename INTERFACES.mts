// 📓 INTERFACES sería la forma que queremos que tenga un objeto, un molde exterior
/*
interface Heroe {
    id: string
    name: string
    age: number
    saludar: () => void
}

const hero: Heroe = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar: () => {
        console.log('Tu amigo y vecino Spiderman')
    }
}
*/

interface Producto { // Esto sería la base
    id: number
    nombre: string
    precio: number
    quantity: number
}

interface Zapatilla extends Producto { // Un producto en concreto que se puede extender la Base de cualquier producto con extends, añadiendo la propiedad talla: number
    talla: number
}
/* // Para un producto en General
interface CarritoDeCompras {
    totalPrice: number
    productos: Producto[]
}
*/

//Especificamos que productos tendrá un array vacio de Zapatillas, por lo tanto, en const carrito, en productos, habrá que añadir la propiedad talla 
interface CarritoDeCompras {
    totalPrice: number
    productos: Zapatilla[]
}


// Para un producto en General
/*
const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 100,
            quantity: 1
        }
    ]
}
*/

// Para Zapatilla
const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 100,
            quantity: 1,
            talla: 43 // añadida la propiedad talla
        }
    ]
}

interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
    clear: () => void
}

const ops: CarritoOps = {
    add: (product: Producto) => {},
    remove: (id: number) => {},
    clear: () => {}
}