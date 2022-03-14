import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscri10',
  templateUrl: './inscri10.component.html',
  styleUrls: ['./inscri10.component.css'],
})
export class Inscri10Component implements OnInit {
  public mask: string = '0000';
  public mask1: string = '000.000.000.000';
  public inscriForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.inscriForm = this.formbuilder.group({
      matricula: ['', [Validators.required]],
      departamento: ['p', [Validators.required]],
      unidadeSaude: [null],
      outrainstituicao: [],
      termos: [false]
    })
  }

  ngOnInit(): void {

  }
}
