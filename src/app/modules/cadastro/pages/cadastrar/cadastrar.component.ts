import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastrarService } from 'src/app/shared/services/cadastrar.service';
import { EstadosService } from 'src/app/shared/services/estados.service';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  public mask: string = '000.000.000-00';
  public phoneMask: string = '(00) 0 0000-0000';
  public cadastrarForm: FormGroup;
  public estados: any[] = []

  constructor(
    private formbuilder: FormBuilder,
    private cadastrarService: CadastrarService,
    private estadosService: EstadosService
  ) {
    this.cadastrarForm = this.formbuilder.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      datanascimento: [null, Validators.required],
      orientacaosexual: [null, Validators.required],
      telefone: [null, [Validators.required]],
      celular: [null],
      email: ['', [Validators.required, Validators.minLength(3)]],
      foto: [null, [Validators.required]],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      cep: [null, Validators.required],
      logradouro: [null, Validators.required],
      endereço: [null, Validators.required],
      complemento: [null],
      numero: [null, Validators.required],
      bairro: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    // LER DADOS DE CACHE DO SERVIÇO
    this.cadastrarService.read(1).then(data => {
      if (data)
        this.cadastrarForm.patchValue(data)
    })
    // CARREGA ESTADOS DO SERVIÇO
    this.estados = this.estadosService.getEstados()
  }

  // CARREGA ARQUIVO DA FOTO PARA A O CAMPO
  public setfoto(event: any) {
    let arquivo = event.target.files?.[0]
    this.cadastrarForm.patchValue({ foto: arquivo });
    this.cadastrarForm.markAllAsTouched();
  }

  // VERIFICA SE TEM FOTO ANEXADA
  public getTemFoto(): boolean {
    if (this.cadastrarForm.get('foto')?.value != null)
      return true
    else
      return false
  }

  // GRAVA DADOS DE CACHE VIA SERVIÇO
  public save() {
    this.cadastrarService.save(this.cadastrarForm.getRawValue())
  }
}