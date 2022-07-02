export class Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  userName: string;
  userPassword: string;
  type: string;

  constructor() {
    this.id = Math.floor((Math.random() * 1000) + 1);
    this.nom = "";
    this.prenom = "";
    this.userName = "";
    this.userPassword = "";
    this.type = "";
  }
}
