import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AccueilComponent} from './components/accueil/accueil.component';
import {AjouterChambreComponent} from "./components/chambre/ajouter-chambre/ajouter-chambre.component";
import {ModifierChambreComponent} from "./components/chambre/modifier-chambre/modifier-chambre.component";
import {SupprimerChambreComponent} from "./components/chambre/supprimer-chambre/supprimer-chambre.component";
import {AjouterClientComponent} from "./components/client/ajouter-client/ajouter-client.component";
import {ModifierClientComponent} from "./components/client/modifier-client/modifier-client.component";
import {SupprimerClientComponent} from "./components/client/supprimer-client/supprimer-client.component";
import {AjouterFactureComponent} from "./components/facture/ajouter-facture/ajouter-facture.component";
import {ModifierFactureComponent} from "./components/facture/modifier-facture/modifier-facture.component";
import {SupprimerFactureComponent} from "./components/facture/supprimer-facture/supprimer-facture.component";
import {AjouterReservationComponent} from "./components/reservation/ajouter-reservation/ajouter-reservation.component";
import {
  ModifierReservationComponent
} from "./components/reservation/modifier-reservation/modifier-reservation.component";
import {
  SupprimerReservationComponent
} from "./components/reservation/supprimer-reservation/supprimer-reservation.component";
import {
  AjouterServiceChambreComponent
} from "./components/serviceChambre/ajouter-service-chambre/ajouter-service-chambre.component";
import {
  SupprimerServiceChambreComponent
} from "./components/serviceChambre/supprimer-service-chambre/supprimer-service-chambre.component";
import {
  ModifierServiceChambreComponent
} from "./components/serviceChambre/modifier-service-chambre/modifier-service-chambre.component";
import {
  SupprimerServiceHotelComponent
} from "./components/serviceHotel/supprimer-service-hotel/supprimer-service-hotel.component";
import {
  ModifierServiceHotelComponent
} from "./components/serviceHotel/modifier-service-hotel/modifier-service-hotel.component";
import {AjouterUserComponent} from "./components/utilisateur/ajouter-user/ajouter-user.component";
import {ModifierUserComponent} from "./components/utilisateur/modifier-user/modifier-user.component";
import {SupprimerUserComponent} from "./components/utilisateur/supprimer-user/supprimer-user.component";
import {ListerUserComponent} from "./components/utilisateur/lister-user/lister-user.component";
import {ListerChambreComponent} from "./components/chambre/lister-chambre/lister-chambre.component";
import {ListerClientComponent} from "./components/client/lister-client/lister-client.component";
import {ListerFactureComponent} from "./components/facture/lister-facture/lister-facture.component";
import {ListerReservationComponent} from "./components/reservation/lister-reservation/lister-reservation.component";
import {
  ListerServiceChambreComponent
} from "./components/serviceChambre/lister-service-chambre/lister-service-chambre.component";
import {
  ListerServiceHotelComponent
} from "./components/serviceHotel/lister-service-hotel/lister-service-hotel.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'ajouterChambre', component: AjouterChambreComponent},
  { path: 'modifierChambre', component: ModifierChambreComponent},
  { path: 'supprimerChambre', component: SupprimerChambreComponent},
  { path: 'ajouterClient', component: AjouterClientComponent},
  { path: 'modifierClient', component: ModifierClientComponent},
  { path: 'supprimerClient', component: SupprimerClientComponent},
  { path: 'ajouterFacture', component: AjouterFactureComponent},
  { path: 'modifierFacture', component: ModifierFactureComponent},
  { path: 'supprimerFacture', component: SupprimerFactureComponent},
  { path: 'ajouterReservation', component: AjouterReservationComponent},
  { path: 'modifierReservation', component: ModifierReservationComponent},
  { path: 'supprimerReservation', component: SupprimerReservationComponent},
  { path: 'ajouterServiceChambre', component: AjouterServiceChambreComponent},
  { path: 'modifierServiceChambre', component: ModifierServiceChambreComponent},
  { path: 'supprimerServiceChambre', component: SupprimerServiceChambreComponent},
  { path: 'ajouterServiceHotel', component: AjouterChambreComponent},
  { path: 'modifierServiceHotel', component: ModifierServiceHotelComponent},
  { path: 'supprimerServiceHotel', component: SupprimerServiceHotelComponent},
  { path: 'ajouterUser', component: AjouterUserComponent},
  { path: 'modifierUser', component: ModifierUserComponent},
  { path: 'supprimerUser', component: SupprimerUserComponent},
  { path: 'listerUser', component: ListerUserComponent},
  { path: 'listerChambre', component: ListerChambreComponent},
  { path: 'listerClient', component: ListerClientComponent},
  { path: 'listerFacture', component: ListerFactureComponent},
  { path: 'listerReservation', component: ListerReservationComponent},
  { path: 'listerServiceChambre', component: ListerServiceChambreComponent},
  { path: 'listerServiceHotel', component: ListerServiceHotelComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
