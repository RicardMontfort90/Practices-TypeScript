import { type IAvenger } from "./types.d"

class Avenger implements IAvenger {
    name: string
    powerScore: number
    wonBattles: number
    age: number

    /* esta parte es si fuera sin types.d.ts!
    readonly name: string
    private powerScore: number // en JavaScript, tindriamos que poner el símbolo # delante de powerScore en todas partes = #powerScore(lo malo es que es solo para forma ESTÁTICA, en JavaScript no sería privado!)
    private readonly wonBattles: number = 0 // valor inical
    protected age: number // Es una especie de privado, pero podemos acceder a clases que hereden de esta clase
    //public age: number = 0 // Por defecto, ya sería public
    */

    constructor(name: string, powerScore: number) {
        this.name = name
        this.powerScore = powerScore
    }

    battle (enemy, win) {
        if (win) {
            this.wonBattles++
            this.powerScore += 5
        } else {
            this.powerScore -= 5
        }
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number) {
        if (newPower <= 100 ) {
            this.powerScore = newPower
        }else {
            throw new Error('Power score cannot be more than 100')
        }
    }
}

const avengers = new Avenger('Spiderman', 80) // Espera solo 2 argumentos, declarados previamente en constructor(name: string, powerScore: number)

console.log(avengers)