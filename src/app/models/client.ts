export class Client {
  private numCli: number;
  private nomCli: string;
  private prenomCli: string;
  private nationnalite: string;
  private telephone: string;
  private email: string;
  private adresse: string;

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
