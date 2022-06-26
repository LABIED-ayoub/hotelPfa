export class Reservation {
  private numRes: number;
  private dateDebut: number;
  private dateFin: number;
  private expiree: boolean;

  constructor() {
    this.numRes = Math.floor((Math.random() * 100) + 1);
    this.dateDebut = Date.now();
    this.dateFin = Date.now();
    this.expiree = false;
  }
}
