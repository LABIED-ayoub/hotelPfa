import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL = "http://localhost:8082/user";
  constructor(private httpClient: HttpClient) {}
  public getUtilisateurList(): Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(`${this.baseURL}/all`);
  }
  public addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(`${this.baseURL}/add`, utilisateur);
  }
  public updateUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.httpClient.put<Utilisateur>(`${this.baseURL}/update`, utilisateur);
  }
  public deleteUtilisateur(numeroUtilisateur: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${numeroUtilisateur}`);
  }
}
