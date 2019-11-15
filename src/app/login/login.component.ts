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

	grupo: FormGroup

	constructor(private router: Router, private usuarioService: UsuariosService) { 
		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		 }); 
	}

	irHome() {
		if(this.usuarioService.loginSuccess(this.grupo.value)){
			this.router.navigate(["/home"])
		}
	}

}
