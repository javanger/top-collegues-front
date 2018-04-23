export enum Avis {
    AIMER = "AIMER",
    DETESTER = "DETESTER"
}

export class Collegue {

    nom: string;
    prenom: string;
    score: number;
    urlImage: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }


}