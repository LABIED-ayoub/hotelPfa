import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";
import {HttpErrorResponse} from "@angular/common/http";
import {UtilisateurService} from "../../../services/utilisateur.service";
import {ChambreService} from "../../../services/chambre.service";

@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})
export class ListerUserComponent implements OnInit {
public utilisateurs!: Utilisateur[];
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getUtilisateurList();
  }
  public getUtilisateurList(): void{
    this.utilisateurService.getUtilisateurList().subscribe(
      (response: Utilisateur[]) => {
        this.utilisateurs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
