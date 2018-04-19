export enum Avis {
  AIMER,
  DETESTER
}

export class Collegue {
  constructor(
    public pseudo: string,
    public score: number,
    public photo: string
  ) {}
}

export class Vote {
  constructor(public collegue: Collegue, public avis: Avis) {}
}
