import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AjouterChambreComponent } from './components/chambre/ajouter-chambre/ajouter-chambre.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AjouterClientComponent } from './components/client/ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './components/client/modifier-client/modifier-client.component';
import { SupprimerClientComponent } from './components/client/supprimer-client/supprimer-client.component';
import { ModifierChambreComponent } from './components/chambre/modifier-chambre/modifier-chambre.component';
import { SupprimerChambreComponent } from './components/chambre/supprimer-chambre/supprimer-chambre.component';
import { AjouterFactureComponent } from './components/facture/ajouter-facture/ajouter-facture.component';
import { ModifierFactureComponent } from './components/facture/modifier-facture/modifier-facture.component';
import { SupprimerFactureComponent } from './components/facture/supprimer-facture/supprimer-facture.component';
import { AjouterReceptionnisteComponent } from './components/receptionniste/ajouter-receptionniste/ajouter-receptionniste.component';
import { ModifierReceptionnisteComponent } from './components/receptionniste/modifier-receptionniste/modifier-receptionniste.component';
import { SupprimerReceptionnisteComponent } from './components/receptionniste/supprimer-receptionniste/supprimer-receptionniste.component';
import { AjouterReservationComponent } from './components/reservation/ajouter-reservation/ajouter-reservation.component';
import { ModifierReservationComponent } from './components/reservation/modifier-reservation/modifier-reservation.component';
import { SupprimerReservationComponent } from './components/reservation/supprimer-reservation/supprimer-reservation.component';
import { AjouterServiceChambreComponent } from './components/serviceChambre/ajouter-service-chambre/ajouter-service-chambre.component';
import { MidifierServiceChambreComponent } from './components/serviceChambre/midifier-service-chambre/midifier-service-chambre.component';
import { SupprimerServiceChambreComponent } from './components/serviceChambre/supprimer-service-chambre/supprimer-service-chambre.component';
import { AjouterServiceHotelComponent } from './components/serviceHotel/ajouter-service-hotel/ajouter-service-hotel.component';
import { ModifierServiceHotelComponent } from './components/serviceHotel/modifier-service-hotel/modifier-service-hotel.component';
import { SupprimerServiceHotelComponent } from './components/serviceHotel/supprimer-service-hotel/supprimer-service-hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AjouterChambreComponent,
    LoginComponent,
    HomeComponent,
    AjouterClientComponent,
    ModifierClientComponent,
    SupprimerClientComponent,
    ModifierChambreComponent,
    SupprimerChambreComponent,
    AjouterFactureComponent,
    ModifierFactureComponent,
    SupprimerFactureComponent,
    AjouterReceptionnisteComponent,
    ModifierReceptionnisteComponent,
    SupprimerReceptionnisteComponent,
    AjouterReservationComponent,
    ModifierReservationComponent,
    SupprimerReservationComponent,
    AjouterServiceChambreComponent,
    MidifierServiceChambreComponent,
    SupprimerServiceChambreComponent,
    AjouterServiceHotelComponent,
    ModifierServiceHotelComponent,
    SupprimerServiceHotelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
