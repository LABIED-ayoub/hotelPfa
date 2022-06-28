export class Utilisateur {
  idUti: number;
  username: string;
  emailUti: string;
  password: string;
  type: string;

  constructor() {
    this.idUti = Math.floor((Math.random() * 1000) + 1);
    this.username = "";
    this.emailUti = "";
    this.password = "";
    this.type = "";
  }
}
