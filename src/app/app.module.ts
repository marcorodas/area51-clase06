import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component'

import { Route, RouterModule } from '@angular/router';

const rutas: Route[] = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "registro", component: RegistroComponent},
  {path: "listado", component: ListadoComponent},
  {path: "nuevo", component: NuevoComponent},
  /* {path: "**", component: "NoEncontradoComponent"} */
  {path: "**", redirectTo: "home"}
]

@NgModule({
  declarations: [
    AppComponent, RegistroComponent, LoginComponent,
    HomeComponent, ListadoComponent, NuevoComponent, NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
