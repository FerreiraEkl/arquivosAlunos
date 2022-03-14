import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscri4',
  templateUrl: './inscri4.component.html',
  styleUrls: ['./inscri4.component.css'],
})
export class Inscri4Component implements OnInit {
  public mask: string = '0000';
  public inscriForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.inscriForm = this.formbuilder.group({
      matricula: ['', [Validators.required]],
      camiseta: ['p', [Validators.required]],
      unidadeSaude: [null],
      outrainstituicao: [],
      termos: [false]
    })
  }

  ngOnInit(): void {

  }
}
