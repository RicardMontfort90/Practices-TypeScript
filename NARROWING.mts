// 📓 NARROWING
// Cuando es un string puedes usar el .length, pero cuando es un número no. Entonces hay que usar narrowing, hacer como un embudo, asegurarnos que vamos perdiendo los tipos que no queremos controlar en este punto 

/*
// 💻 FORMA 1ª (Más básica)
function mostrarLongitud (objeto: number | string) {
    //return objeto.length  // ❌ Esto daría Error
    if (typeof objeto === 'string') {  // al usar if, como lo que esta dentro debe ser true, ya TypeScript detecta que lo siguiente solo será un string. Y ya podemos usar todos los metodos de string. Esto sería hacer Narrowing
        return objeto.length  // aquí el objeto ahora solo es string
    }
    return objeto.toString().length // ahora el objeto solo puede ser number
}

mostrarLongitud('1')
*/

// 💻 FORMA 2ª

interface Mario {
    company: 'Nintendo', // también podríamos poner directamente 'Nintendo' en vez de string, así nos asegurariamos de que si creamos un Mario, siempre tenga que ser Nintendo 
    nombre: string, //Nombre del juego 
    saltar: () => void // Acción básica que realiza
}

interface Sonic {
    company: 'Sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic


// 💻 type Guard
// dejame comprar si el personaje es Sonic
// y esta function determina si es Sonic o no
function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje) {
    // hay que evitar, en todo caso hacer los Type Guard, ya que suele dar bastantes problemas a la hora de testing
    if (checkIsSonic(personaje)) {
        personaje.correr()
    }
    /* if (personaje.company === 'Nintendo') {
        personaje.saltar() // <- Este seguro que es Mario
        return
    }
    //Segurp que solo llega a Sonic
    personaje.correr()
    */
}

