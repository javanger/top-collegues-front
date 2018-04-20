export enum Avis{
    AIMER,
    DETESTER
}
export class Collegue{
    nom:string
    score:number
    photo:string
    email:string
    pays:string

    constructor(obj:any) {
        Object.assign(this, obj)
    }
    
}