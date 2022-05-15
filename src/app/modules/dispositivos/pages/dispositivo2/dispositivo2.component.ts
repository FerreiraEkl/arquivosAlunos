import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dispositivo2',
  templateUrl: './dispositivo2.component.html',
  styleUrls: ['./dispositivo2.component.css']
})
export class Dispositivo2Component implements OnInit {
  public mask: string = '000.000.000-00';
  public mask1: string = '000000000000000';
  public mask2: string = '(00)00000-0000';
  public dispositivosForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.dispositivosForm = this.formbuilder.group({
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

