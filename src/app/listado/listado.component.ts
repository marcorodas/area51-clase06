import { Component } from '@angular/core';

import { HistoriaService } from "./../historia.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor(private historiaService: HistoriaService){}

}
