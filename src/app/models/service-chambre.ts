export class ServiceChambre {
   idServCh: number;
   nomServCh: string;

  constructor() {
    this.idServCh = Math.floor((Math.random() * 100) + 1);
    this.nomServCh = "";
  }
}
