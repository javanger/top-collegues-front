export enum Avis {
  AIMER,
  DETESTER
}

export class Collegue {

  constructor(
    public pseudo: string,
    public score: number,
    public urlImage: string,
    public name?: string,
    public prenom?: string,
    public email?: string,
    public adresse?: string
  ) { }

}

export class Vote {
  constructor(public collegue: Collegue, public avis: Avis) { }
}
