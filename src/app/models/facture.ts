export class Facture {
  private numFacture: number;
  private montantFacture: number;
  constructor() {
    this.numFacture = Math.floor((Math.random() * 100) + 1);
    this.montantFacture = 0;
  }
}
