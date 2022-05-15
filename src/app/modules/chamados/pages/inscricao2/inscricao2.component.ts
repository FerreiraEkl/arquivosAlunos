import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-inscricao2',
  templateUrl: './inscricao2.component.html',
  styleUrls: ['./inscricao2.component.css']
})
export class Inscricao2Component implements OnInit {
  public mask: string = '000.000.000-00';
  public inscricaoForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private navbar: NavbarService) {
    this.inscricaoForm = this.formbuilder.group({
      cpf: ['', [Validators.required]],
      camiseta: ['p', [Validators.required]],
      unidadeSaude: [null],
      outrainstituicao: [],
      termos: [false]
    })
  }

  ngOnInit(): void {
    this.navbar.setOptions([{name:'teste', url:'test'}])
  }
}

