import { Component, OnInit } from '@angular/core';
import {CargarscriptsService} from "../../cargarscripts.service"
@Component({
  selector: 'app-seccion8',
  templateUrl: './seccion8.component.html',
  styleUrls: ['./seccion8.component.css']
})
export class Seccion8Component implements OnInit {

  constructor(private _cargarscripts:CargarscriptsService) {
    _cargarscripts.carga( ["js/taller"] );
   }

  ngOnInit(): void {
  }

}
