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

export class Vote{
    collegue:Collegue
    avis:Avis
    constructor(collegue:Collegue, avis:Avis){
        this.avis=avis
        this.collegue = collegue
    }

    get Collegue(){
        return this.collegue
    }

    get Avis(){
        return this.avis
    }
}

export class MonModel { 
    matricule:string; 
    pseudo:string; 
    url:string
 }