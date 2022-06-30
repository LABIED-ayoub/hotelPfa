import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceHotel} from "../models/service-hotel";

@Injectable({
  providedIn: 'root'
})
export class ServiceHotelService {
  private baseURL = "http://localhost:8082/ServiceHotel";
  constructor(private httpClient: HttpClient) {}
  public getServiceHotelList(): Observable<ServiceHotel[]>{
    return this.httpClient.get<ServiceHotel[]>(`${this.baseURL}/all`);
  }
  public addServiceHotel(serviceHotel: ServiceHotel): Observable<ServiceHotel>{
    return this.httpClient.post<ServiceHotel>(`${this.baseURL}/add`, serviceHotel);
  }
  public updateServiceHotel(serviceHotel: ServiceHotel): Observable<ServiceHotel>{
    return this.httpClient.put<ServiceHotel>(`${this.baseURL}/update`, serviceHotel);
  }
  public deleteServiceHotel(numeroServiceHotel: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${numeroServiceHotel}`);
  }
}
