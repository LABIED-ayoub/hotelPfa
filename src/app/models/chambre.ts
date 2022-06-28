export class Chambre {
   idCh: number;
   nbrPerso: number;
   alloue: boolean;
   telChambre: string;
   prixCh: number;
   typeCh: string;

/*  constructor(id: number, nbrPerso: number, alloue: boolean, telChambre: string, prix: number, type: string) {
    this.id = id;
    this.nbrPerso = nbrPerso;
    this.alloue = alloue;
    this.telChambre = telChambre;
    this.prix = prix;
    this.type = type;
  }*/
  constructor() {
    this.idCh = Math.floor((Math.random() * 100) + 1);
    this.nbrPerso = 0;
    this.alloue = false;
    this.telChambre = "";
    this.prixCh = 0;
    this.typeCh = "";
  }
}
