import { Component, OnInit } from '@angular/core';
import {CargarscriptsService} from "../../cargarscripts.service"

@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.component.html',
  styleUrls: ['./seccion3.component.css']
})
export class Seccion3Component implements OnInit {

  constructor(private _cargarscripts:CargarscriptsService) {
    _cargarscripts.carga( ["js/taller1"] );
   }

  ngOnInit(): void {
  }

}
