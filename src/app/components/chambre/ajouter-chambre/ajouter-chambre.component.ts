import { Component, OnInit } from '@angular/core';
import {ChambreService} from "../../../services/chambre.service";
import {Chambre} from "../../../models/chambre";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-chambre',
  templateUrl: './ajouter-chambre.component.html',
  styleUrls: ['./ajouter-chambre.component.css']
})
export class AjouterChambreComponent implements OnInit {
  public chambres!: Chambre[];

  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    this.getChambreList();
  }
  public getChambreList(): void{
    this.chambreService.getChambreList().subscribe(
      (response: Chambre[]) => {
        this.chambres = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
