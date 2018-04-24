export enum Avis {
    AIMER = "AIMER",
    DETESTER = "DETESTER"
}

export class Collegue {

    nom: string;
    prenom: string;
    score: number;
    urlImage: string;
    adresse: string;
    email: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }


}

export class NewCollegue {

    matricule: string;
    nom: string;
    prenom: string;
    urlImage: string;


    constructor(obj: any) {
        Object.assign(this, obj);
    }


}