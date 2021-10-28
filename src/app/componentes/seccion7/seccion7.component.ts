import { Component, OnInit } from '@angular/core';
import {CargarscriptsService} from "../../cargarscripts.service"
@Component({
  selector: 'app-seccion7',
  templateUrl: './seccion7.component.html',
  styleUrls: ['./seccion7.component.css']
})
export class Seccion7Component implements OnInit {

  constructor(private _cargarscripts:CargarscriptsService) {
    _cargarscripts.carga( ["js/taller2"] );
   }

  ngOnInit(): void {
  }

}
