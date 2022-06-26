export class Utilisateur {
  private idUti: number;
  private username: string;
  private emailUti: string;
  private password: string;
  private type: string;

  constructor() {
    this.idUti = Math.floor((Math.random() * 1000) + 1);
    this.username = "";
    this.emailUti = "";
    this.password = "";
    this.type = "";
  }
}
