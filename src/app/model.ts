export enum Avis {
    AIMER,
    DETESTER,
}

export enum Mode {
    DEFAULT,
    TOP3,
}

export class Vote{
    collegue:Collegue
    avis:Avis
    score:number
    constructor(collegue:Collegue, avis:Avis, score:number){
        this.avis=avis
        this.collegue = collegue
        this.score = score
    }

    get Collegue(){
        return this.collegue
    }

    get Avis(){
        return this.avis
    }
    get Score(){
        return this.score
    }

}

export class Collegue{
    pseudo:string
    score:number
    url:string
    nom:string
    prenom:string
    adresse:string
    email:string

    constructor(pseudo:string, score:number, url:string, nom?:string, prenom?:string, adresse?:string, email?:string){
        this.pseudo = pseudo
        this.score = score
        this.url = url
        this.nom = nom
        this.prenom = prenom
        this.adresse = adresse
        this.email = email
    }

    set Score(score:number){
        this.score=score
    }
    
}