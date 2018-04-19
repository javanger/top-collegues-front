export enum Avis {
    AIMER = "AIMER",
    DETESTER = "DETESTER",
}

export class Collegue {
    pseudo:string
    score:number
    photo:string

    constructor(pseudo:string,score:number,photo:string){
        this.photo = photo
        this.pseudo = pseudo
        this.score = score
    }

}