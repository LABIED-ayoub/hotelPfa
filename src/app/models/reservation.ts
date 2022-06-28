export class Reservation {
   numRes: number;
   dateDebut: number;
   dateFin: number;
   expiree: boolean;

  constructor() {
    this.numRes = Math.floor((Math.random() * 100) + 1);
    this.dateDebut = Date.now();
    this.dateFin = Date.now();
    this.expiree = false;
  }
}
