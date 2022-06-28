import { Component, OnInit } from '@angular/core';
import {Chambre} from "../../../models/chambre";

@Component({
  selector: 'app-modifier-chambre',
  templateUrl: './modifier-chambre.component.html',
  styleUrls: ['./modifier-chambre.component.css']
})
export class ModifierChambreComponent implements OnInit {

  chambres!: Chambre[];
  constructor() { }

  ngOnInit(): void {
  }

}
