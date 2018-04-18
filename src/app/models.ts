export enum Avis {
AIMER = 'aimer',
DETESTER = 'detester'
}

export class Collegue {
 name: string;
 img: string;
 score: number;
    constructor(name: string, img: string, score: number){
        this.name = name;
        this.img = img;
        this.score = score;
        
    }
}

