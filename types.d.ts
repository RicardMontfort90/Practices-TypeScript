//types.d.ts ( la d es de definición, es una bunea práctica, LO EXPORTAMOS Y despues lo importamos a INSTANCE) AQUÍ NO PONDREMOS CÓDIGO!!
export interface IAvenger {
    name: string
    powerScore: number
    wonBattles: number
    age: number
    battle: (enemy: IAvenger, win: boolean) => void
}

export type HeroId = `${number}-${string}`