import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  ngOnInit() {
  }

}
