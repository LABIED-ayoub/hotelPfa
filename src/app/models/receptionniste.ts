export class Receptionniste {

   matriculeRec: number;
   nomRec: string;
   prenomRec: string;
   salaire: number;

  constructor() {
    this.matriculeRec = Math.floor((Math.random() * 100) + 1);
    this.nomRec = "";
    this.prenomRec = "";
    this.salaire = 0;
  }
}
