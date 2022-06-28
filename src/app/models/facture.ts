export class Facture {
   numFacture: number;
   montantFacture: number;
  constructor() {
    this.numFacture = Math.floor((Math.random() * 100) + 1);
    this.montantFacture = 0;
  }
}
