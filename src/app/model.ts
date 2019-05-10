export enum Avis {
    AIMER,
    DETESTER,
}

export class Collegue{
    pseudo:string
    score:number
    photo:string

    constructor(pseudo:string, photo?:string){
        this.pseudo = pseudo
        this.score = 0
        this.photo =photo
    }

    set Score(score:number){
        this.score=score
    }
    
}