export enum Avis{
    AIMER = "j'aime",
    DETESTER = "je déteste"
}
export class Collegue{
    pseudo:string
    score:number
    photo:string
    
    constructor(pseudo:string, photo?:string){
        this.pseudo = pseudo
        this.score = 0
        this.photo = photo
    }
}