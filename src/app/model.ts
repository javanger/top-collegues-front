export enum Avis {
    AIMER,
    DETESTER,
}

export enum Mode {
    DEFAULT,
    TOP3,
}

export class Collegue{
    pseudo:string
    score:number
    photo:string
    nom:string
    prenom:string
    adresse:string
    email:string

    constructor(pseudo:string, score:number, photo:string, nom?:string, prenom?:string, adresse?:string, email?:string){
        this.pseudo = pseudo
        this.score = score
        this.photo = photo
        this.nom = nom
        this.prenom = prenom
        this.adresse = adresse
        this.email = email
    }

    set Score(score:number){
        this.score=score
    }
    
}