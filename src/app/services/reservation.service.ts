import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = "http://localhost:8082/Reservation";
  constructor(private httpClient: HttpClient) {}
  public getReservationList(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(`${this.baseURL}/all`);
  }
  public addReservation(reservation: Reservation): Observable<Reservation>{
    return this.httpClient.post<Reservation>(`${this.baseURL}/add`, reservation);
  }
  public updateReservation(reservation: Reservation): Observable<Reservation>{
    return this.httpClient.put<Reservation>(`${this.baseURL}/update`, reservation);
  }
  public deleteReservation(numeroReservation: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${numeroReservation}`);
  }
}
