export class Receptionniste {

  private matriculeRec: number;
  private nomRec: string;
  private prenomRec: string;
  private salaire: number;

  constructor() {
    this.matriculeRec = Math.floor((Math.random() * 100) + 1);
    this.nomRec = "";
    this.prenomRec = "";
    this.salaire = 0;
  }
}
