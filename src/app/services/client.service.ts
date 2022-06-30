import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURL = "http://localhost:8082/Client";
  constructor(private httpClient: HttpClient) {}
  public getClientList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}/all`);
  }
  public addClient(client: Client): Observable<Client>{
    return this.httpClient.post<Client>(`${this.baseURL}/add`, client);
  }
  public updateClient(client: Client): Observable<Client>{
    return this.httpClient.put<Client>(`${this.baseURL}/update`, client);
  }
  public deleteClient(numeroClient: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${numeroClient}`);
  }
}
