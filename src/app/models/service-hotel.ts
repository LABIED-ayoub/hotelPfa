export class ServiceHotel {
  private idServiceHo: number;
  private nomServiceHo: string;
  private prixSerciceHo: number;

  constructor() {
    this.idServiceHo = Math.floor((Math.random() * 100) + 1);
    this.nomServiceHo = "";
    this.prixSerciceHo = 0;
  }
}
