export enum Avis {
    AIMER,
    DETESTER,
}

export class Collegue{
    pseudo:string
    score:number
    photo:string

    constructor(pseudo:string, score:number, photo?:string){
        this.pseudo = pseudo
        this.score = score
        this.photo = photo
    }

    set Score(score:number){
        this.score=score
    }
    
}