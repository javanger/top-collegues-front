export enum Avis {
    AIMER = "AIMER",
    DETESTER = "DETESTER"
}

export class Collegue {
    pseudo:string
    score:number
    photo:string
    nom:string
    prenom:string
    email:string
    adresse:string

    constructor(pseudo:string,score:number,photo:string,nom:string,prenom:string,email:string,adresse:string){
        this.pseudo = pseudo
        this.score = score
        this.photo = photo
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.adresse = adresse
    }
}

export class Vote {
    id:number
    avis:Avis
    collegue:Collegue
    score:number

    constructor(id:number, avis:Avis, collegue:Collegue, score:number) {
        this.id = id
        this.avis = avis
        this.collegue = collegue
        this.score = score
    }


}