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
  loginSuccess: boolean = true

	constructor(private router: Router, private usuarioService: UsuariosService) { 
		this.frmLogin = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		 }); 
	}

	irHome() {
    this.loginSuccess = this.usuarioService.loginSuccess(this.frmLogin.value)
		if(this.loginSuccess){
			this.router.navigate(["/home"])
		}
	}

}
