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

interface Zapatilla extends Producto { // Un producto en concreto que se puede extender la Base de cualquier producto con extends
    talla: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: Producto[]
}

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