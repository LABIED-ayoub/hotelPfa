import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facture} from "../models/facture";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private baseURL = "http://localhost:8082/Facture";
  constructor(private httpClient: HttpClient) {}
  public getFactureList(): Observable<Facture[]>{
    return this.httpClient.get<Facture[]>(`${this.baseURL}/all`);
  }
  public addFacture(facture: Facture): Observable<Facture>{
    return this.httpClient.post<Facture>(`${this.baseURL}/add`, facture);
  }
  public updateFacture(facture: Facture): Observable<Facture>{
    return this.httpClient.put<Facture>(`${this.baseURL}/update`, facture);
  }
  public deleteFacture(numeroFacture: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${numeroFacture}`);
  }
}
