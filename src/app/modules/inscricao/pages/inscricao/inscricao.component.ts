import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscricaoService } from 'src/app/shared/services/inscricao.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mask: string = '000.000.000-00';
  public inscricaoForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private inscricaoService: InscricaoService
  ) {
    this.inscricaoForm = this.formbuilder.group({
      cpf: ['', [Validators.required]],
      camiseta: ['p', [Validators.required]],
      unidadeSaude: [null],
      outrainstituicao: [],
      termos: [false]
    })
  }

  ngOnInit(): void {

    // LENDO DADOS DE CACHE DO SERVIÇO
    this.inscricaoService.read(1).then(data => {
      if (data)
        this.inscricaoForm.patchValue(data)
    })
  }

  // GRAVA DADOS DE CACHE DO SERVIÇO
  public save() {
    this.inscricaoService.save(this.inscricaoForm.getRawValue())
  }
}
