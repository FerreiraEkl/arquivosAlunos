import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscric16',
  templateUrl: './inscric16.component.html',
  styleUrls: ['./inscric16.component.css'],
})
export class Inscric16Component implements OnInit {
  public mask2: string = '000000';
public phoneMask: string = '(00) 0 0000-0000';
  public inscriForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.inscriForm = this.formbuilder.group({
      matricula: ['', [Validators.required]],
      camiseta: ['p', [Validators.required]],
      descrição: [null, Validators.required],
      datadaentrada: [null, Validators.required],
      telefone: [null, Validators.required],
      unidadeSaude: [null],
      outrainstituicao: [],
      termos: [false]
    })
  }

  ngOnInit(): void {

  }
}
