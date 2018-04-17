export enum Avis {
    AIMER,
    DETESTER
}

export class Collegue {

    pseudo: string;
    score: number;
    image: string;

    constructor(pseudo : string, score : number, image : string) {
        this.pseudo = pseudo;
        this.score = score;
        this.image = image;
    }


}