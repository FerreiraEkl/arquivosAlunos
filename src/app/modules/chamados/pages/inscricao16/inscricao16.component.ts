import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscricao16',
  templateUrl: './inscricao16.component.html',
  styleUrls: ['./inscricao16.component.css']
})
export class Inscricao16Component implements OnInit {
  public mask: string = '000.000.000-00';
  public inscricaoForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.inscricaoForm = this.formbuilder.group({
      cpf: ['', [Validators.required]],
      camiseta: ['p', [Validators.required]],
      unidadeSaude: [null],
      outrainstituicao: [],
      termos: [false]
    })
  }

  ngOnInit(): void {

  }
}
