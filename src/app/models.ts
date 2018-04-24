 export enum Avis  {
    AIMER,
    DETESTER,
  };

 export class Collegue{

    
    constructor(public photo:String, public matricule:string,public pseudo:string, public note:number=0, public nom:String, public prenom:string,public email:String,public adresse:String){
      
    }
    
          
   
  }

  