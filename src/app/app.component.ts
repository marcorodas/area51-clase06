import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from "./usuarios.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private usuarioService: UsuariosService) {}

  logout(){
    this.usuarioService.logout()
    this.router.navigate(["/"])
  }
}
