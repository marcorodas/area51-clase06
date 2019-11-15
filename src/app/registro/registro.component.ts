import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  grupo: FormGroup;
  dominiosgratuitos: Array<string> = ["gmail.com", "yahoo.com", "outñlook.com", "hotmail.com"]

  constructor() {
    this.grupo = new FormGroup(
      {
        nombre: new FormControl("Sergio", Validators.required),
        correo: new FormControl("Correo@gmail.com", [Validators.required, Validators.email,
          this.validarcorreogratuito.bind(this)]),
        contrasena: new FormControl("1234", Validators.required),
        confirmacion: new FormControl("1234", Validators.required)
      }
    )
  }

  ngOnInit() {
  }
  registrar() {
    console.log(this.grupo)
    if (this.grupo.invalid) {
      console.log("datos invalidos");

    } else {
      console.log("datos validos");

    }
  }

  cargardata() {
    this.grupo.setValue({
      nombre: "abc",
      correo: "mi@gmail.com",
      contrasena: "12345",
      confirmacion: "12345"
    })
  }
  cargardataparcial() {
    this.grupo.patchValue({
      nombre: "javier",
      correo: "pepito@gmail.com"
    })
  }
  validarcorreogratuito(fc: FormControl): { [s: string]: boolean } {
    if (!fc || !fc.value) return null
    if(fc.value.trim()==" ")return null
    const valor = fc.value
    const partes = valor.split("@")
     if(partes.length == 1) return null

    const dominio = valor.split("@")[1].toLowerCase()
    if (this.dominiosgratuitos.indexOf(dominio) > -1) {
      return { "correogratuito": true }
    }
    return null

  }
	validarCorreoEmpresarial(fc: FormControl): { [s: string]: boolean } {
		if (!fc || !fc.value || fc.value.split("@").length == 1) return null

		const dominio = fc.value.split("@")[1].toLowerCase()

		if (dominio != "area51.pe") return { noCorreoEmpresarial: true }

		return null
	}

}
