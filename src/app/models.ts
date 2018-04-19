export enum Avis {
  AIMER,
  DETESTER
}

export class Collegue {
  constructor(
    public name: string,
    public score: number,
    public urlImage: string
  ) {}
}

export class Vote {
  constructor(public collegue: Collegue, public avis: Avis) {}
}
