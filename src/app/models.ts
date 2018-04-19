export enum Avis {
    AIMER = "AIMER",
    DETESTER = "DETESTER"
}

export class Collegue {

    nom: string;
    prenom: string;
    score: number;
    urlImage: string;

    constructor(nom: string, prenom: string, score: number, urlImage: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.score = score;
        this.urlImage = urlImage;
    }


}