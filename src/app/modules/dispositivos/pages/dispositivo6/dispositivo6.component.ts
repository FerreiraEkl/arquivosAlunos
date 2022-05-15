import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dispositivo6',
  templateUrl: './dispositivo6.component.html',
  styleUrls: ['./dispositivo6.component.css']
})
export class Dispositivo6Component implements OnInit {
  public mask: string = '00';
  public mask1: string = '000000000000000';
  public mask2: string = '000000000';
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

