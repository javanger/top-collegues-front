export enum Avis{
    AIMER,
    DETESTER
}
export class Collegue{
    pseudo:string
    prenom:string
    nom:string
    score:number
    photo:string
    email:string
    pays:string

    constructor(obj:any) {
        Object.assign(this, obj)
    }
    
}

export class MonModel { 
    matricule:string; 
    pseudo:string; 
    url:string
 }