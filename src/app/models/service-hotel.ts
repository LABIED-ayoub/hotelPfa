export class ServiceHotel {
   idServiceHo: number;
   nomServiceHo: string;
   prixSerciceHo: number;

  constructor() {
    this.idServiceHo = Math.floor((Math.random() * 100) + 1);
    this.nomServiceHo = "";
    this.prixSerciceHo = 0;
  }
}
