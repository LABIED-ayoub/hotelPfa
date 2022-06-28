export class Client {
   numCli: number;
   nomCli: string;
   prenomCli: string;
   nationnalite: string;
   telephone: string;
   email: string;
   adresse: string;

  constructor() {
    this.numCli = Math.floor((Math.random() * 1000) + 1);
    this.nomCli = "";
    this.prenomCli = "";
    this.nationnalite = "";
    this.adresse = "";
    this.telephone = "";
    this.email = "";
  }
}
