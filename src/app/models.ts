export enum Avis {
    AIMER = "J'aime",
    DETESTER = "Je déteste",
}

export class Collegue {
    photo:string
    pseudo:string
    score:number

    constructor(photo:string, pseudo:string,score:number){
        this.photo = photo
        this.pseudo = pseudo
        this.score = score
    }

}