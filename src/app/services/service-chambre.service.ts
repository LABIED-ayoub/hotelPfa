import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceChambre} from "../models/service-chambre";

@Injectable({
  providedIn: 'root'
})
export class ServiceChambreService {
  private baseURL = "http://localhost:8082/ServiceChambre";
  constructor(private httpClient: HttpClient) {}
  public getServiceChambreList(): Observable<ServiceChambre[]>{
    return this.httpClient.get<ServiceChambre[]>(`${this.baseURL}/all`);
  }
  public addServiceChambre(serviceChambre: ServiceChambre): Observable<ServiceChambre>{
    return this.httpClient.post<ServiceChambre>(`${this.baseURL}/add`, serviceChambre);
  }
  public updateServiceChambre(serviceChambre: ServiceChambre): Observable<ServiceChambre>{
    return this.httpClient.put<ServiceChambre>(`${this.baseURL}/update`, serviceChambre);
  }
  public deleteServiceChambre(numeroServiceChambre: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${numeroServiceChambre}`);
  }
}
