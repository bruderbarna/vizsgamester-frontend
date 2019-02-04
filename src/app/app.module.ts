import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AfterVizsgaComponent } from './components/after-vizsga/after-vizsga.component';
import { CreateVizsgaComponent } from './components/create-vizsga/create-vizsga.component';
import { ModifyVizsgaComponent } from './components/modify-vizsga/modify-vizsga.component';
import { PreVizsgaComponent } from './components/pre-vizsga/pre-vizsga.component';
import { VizsgaDetailsComponent } from './components/vizsga-details/vizsga-details.component';
import { VizsgaKerdesComponent } from './components/vizsga-kerdes/vizsga-kerdes.component';
import { VizsgaKitoltesDetailsComponent } from './components/vizsga-kitoltes-details/vizsga-kitoltes-details.component';
import { VizsgaztatoDashboardComponent } from './components/vizsgaztato-dashboard/vizsgaztato-dashboard.component';
import { VizsgaztatoLoginComponent } from './components/vizsgaztato-login/vizsgaztato-login.component';
import { VizsgaztatoRegisztracioComponent } from './components/vizsgaztato-regisztracio/vizsgaztato-regisztracio.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminVizsgaztatoInvitacioComponent } from './components/admin-vizsgaztato-invitacio/admin-vizsgaztato-invitacio.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpHelperService } from './services/http-helper.service';
import { VizsgaService } from './services/vizsga.service';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: VizsgaztatoLoginComponent },
  { path: 'pre-vizsga', component: PreVizsgaComponent },
  { path: 'vizsga-kerdes', component: VizsgaKerdesComponent },
  { path: 'after-vizsga', component: AfterVizsgaComponent },
  { path: 'regisztracio', component: VizsgaztatoRegisztracioComponent },
  {
    path: 'vizsgaztato-dashboard',
    component: VizsgaztatoDashboardComponent,
    children: [
      { path: 'create-vizsga', component: CreateVizsgaComponent },
      { path: 'modify-vizsga', component: ModifyVizsgaComponent },
      {
        path: 'vizsga-details',
        component: VizsgaDetailsComponent,
        children: [
          { path: 'vizsga-kitoltes-details', component: VizsgaDetailsComponent },
        ]
      },
    ],
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'invitacio', component: AdminVizsgaztatoInvitacioComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AfterVizsgaComponent,
    CreateVizsgaComponent,
    ModifyVizsgaComponent,
    PreVizsgaComponent,
    VizsgaDetailsComponent,
    VizsgaKerdesComponent,
    VizsgaKitoltesDetailsComponent,
    VizsgaztatoDashboardComponent,
    VizsgaztatoLoginComponent,
    VizsgaztatoRegisztracioComponent,
    AdminDashboardComponent,
    AdminVizsgaztatoInvitacioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    HttpHelperService,
    VizsgaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
