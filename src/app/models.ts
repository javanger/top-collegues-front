export enum Avis {
    AIMER="J'aime", DETESTER="Je déteste"
};

export class Collegue {
    constructor(public pseudo:string, public score:number, public photo:string) {

    }
}