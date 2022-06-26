import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from './models/chambre';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private baseURL = "http://localhost/phpmyadmin/tbl_structure.php?db=hotel&table=chambre";
  constructor(private httpClient: HttpClient) {
    get
  }
}
