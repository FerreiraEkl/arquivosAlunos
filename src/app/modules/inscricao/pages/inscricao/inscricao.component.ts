import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadosService } from 'src/app/shared/services/chamados.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mask: string = '0000';
  public inscricaoForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private chamadoService: ChamadosService
  ) { }

  ngOnInit(): void {
    this.inscricaoForm = this.formbuilder.group({
      // matricula: ['', [Validators.required]],
      // camiseta: ['p', [Validators.required]],
      // unidadeSaude: [null],
      // outrainstituicao: [],
      // termos: [false],

      chamado_cliente: [null, Validators.required],
      chamado_data: [null, Validators.required],
      chamado_hora: [null, Validators.required],
      chamado_assunto: [null, Validators.required],
      chamado_descricao: [null, Validators.required],
      chamado_alocar: [null, Validators.required],
      chamado_prazo: [null, Validators.required],
      chamado_status: [null, Validators.required],
      Chamado_datendimento: [null, Validators.required],
      Chamado_atendidopor: [null, Validators.required],
      Chamado_observacoes: [null, Validators.required],
      chamado_localizacao: [null, Validators.required],
      chamado_marca: [null, Validators.required],
      chamado_iniandamento: [null, Validators.required],
      chamado_obsfinal: [null, Validators.required],
      chamado_usfechou: [null, Validators.required],
      chamado_abertopor: [null, Validators.required],
      chamado_retrabalho: [null, Validators.required],
    })
  }

  async onSubmit() {
    const saved = await this.chamadoService.create(this.inscricaoForm.value);

    if (saved) {
      alert("Chamado salvo com sucesso");
      return;
    }

    else {
      alert("Não foi possivel salvar o chamado")
    }
  }
}