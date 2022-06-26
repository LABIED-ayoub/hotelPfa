export class ServiceChambre {
  private idServCh: number;
  private nomServCh: string;

  constructor() {
    this.idServCh = Math.floor((Math.random() * 100) + 1);
    this.nomServCh = "";
  }
}
