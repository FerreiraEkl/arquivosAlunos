import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mask: string = '00.000.0000-00';
  public inscricaoForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.inscricaoForm = this.formbuilder.group({
      cpf: ['', [Validators.required]],
      camiseta: ['p', [Validators.required]],
      unidadeSaude: [null],
      outraInstituicao: [],
      termos: [false]
    })
  }

  ngOnInit(): void {

  }
}
