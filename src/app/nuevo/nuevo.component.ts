import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn
} from "@angular/forms";

import { HistoriaService } from "./../historia.service";

@Component({
  selector: "app-nuevo",
  templateUrl: "./nuevo.component.html",
  styleUrls: ["./nuevo.component.css"]
})
export class NuevoComponent {
  frmHome: FormGroup;
  showMsgSaveOk: boolean;

  constructor(private historiaService: HistoriaService) {
    this.frmHome = new FormGroup({
      fechaRq: new FormControl("", [Validators.required, this.validarFechas()]),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      fechaAtencion: new FormControl("", [
        Validators.required,
        this.validarFechas()
      ]),
      medico: new FormControl(null, Validators.required),
      paramedico: new FormControl(null, Validators.required)
    });
  }

  validarFechas(): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {
      if (!this.frmHome) return null;
      if (!this.fechaRq || !this.fechaRq.value) return null;
      if (!this.fechaAtencion || !this.fechaAtencion.value) return null;
      return new Date(this.fechaAtencion.value) < new Date(this.fechaRq.value)
        ? { fechaError: true }
        : null;
    };
  }

  onChangeFechaAtencion() {
    if (this.fechaAtencion && this.fechaAtencion.value)
      if (this.fechaRq && this.fechaRq.value)
        this.fechaRq.updateValueAndValidity();
  }

  onChangeFechaRq() {
    if (this.fechaRq && this.fechaRq.value)
      if (this.fechaAtencion && this.fechaAtencion.value)
        this.fechaAtencion.updateValueAndValidity();
  }

  get fechaRq() {
    return this.frmHome.get("fechaRq");
  }
  get nombre() {
    return this.frmHome.get("nombre");
  }
  get apellido() {
    return this.frmHome.get("apellido");
  }
  get fechaAtencion() {
    return this.frmHome.get("fechaAtencion");
  }
  get medico() {
    return this.frmHome.get("medico");
  }
  get paramedico() {
    return this.frmHome.get("paramedico");
  }

  onSubmit() {
    if (this.frmHome.invalid) return;
    this.showMsgSaveOk = true;
    setTimeout(() => {
      this.showMsgSaveOk = false;
    }, 1500);
    this.historiaService.historias.push(this.frmHome.value);
    this.frmHome.reset();
  }
}
