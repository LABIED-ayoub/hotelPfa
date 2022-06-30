import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Chambre} from "../models/chambre";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private baseURL = "http://localhost:8082/chambre";
  constructor(private httpClient: HttpClient) {}
   public getChambreList(): Observable<Chambre[]>{
      return this.httpClient.get<Chambre[]>(`${this.baseURL}/all`);
  }
  public addChambre(chambre: Chambre): Observable<Chambre>{
    return this.httpClient.post<Chambre>(`${this.baseURL}/add`, chambre);
  }
  public updateChambre(chambre: Chambre): Observable<Chambre>{
    return this.httpClient.put<Chambre>(`${this.baseURL}/update`, chambre);
  }
  public deleteChambre(numeroChambre: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${numeroChambre}`);
  }
}
