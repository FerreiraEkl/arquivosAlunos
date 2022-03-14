import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadosService } from 'src/app/shared/services/chamados.service';

@Component({
  selector: 'app-inscri5',
  templateUrl: './inscri5.component.html',
  styleUrls: ['./inscri5.component.css']
})
export class Inscri5Component implements OnInit {
  public mask: string = '0000';
  public inscriForm: FormGroup;

  public chamados: any[] = [];

  constructor(private formbuilder: FormBuilder, private chamadosService: ChamadosService) {
    this.inscriForm = this.formbuilder.group({
      matricula: ['', [Validators.required]],
      camiseta: ['p', [Validators.required]],
      unidadeSaude: [null],
      outrainstituicao: [],
      termos: [false]
    })
  }

  async ngOnInit(): Promise<void> {
    this.chamados = await this.chamadosService.readAll();
  }
}
