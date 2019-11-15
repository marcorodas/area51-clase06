import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { UsuariosService } from "./../usuarios.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	frmLogin: FormGroup
  showLoginError: boolean

	constructor(private router: Router, private usuarioService: UsuariosService) { 
		this.frmLogin = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		 }); 
	}

  clearError(){
    this.showLoginError = false;
  }

	onLoginSubmit() {
    this.usuarioService.doLogin(this.frmLogin.value)
    this.showLoginError = !this.usuarioService.logginSuccess()
    if(this.showLoginError) return
    this.router.navigate(["/listado"])
	}

}
