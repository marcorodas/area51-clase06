import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  frmHome: FormGroup

  constructor() { 
    this.frmHome = new FormGroup({
      fechaRq: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      fechaAtencion: new FormControl(null, Validators.required),
      medico: new FormControl(null, Validators.required),
      paramedico: new FormControl(null, Validators.required)
   });
  }

}
