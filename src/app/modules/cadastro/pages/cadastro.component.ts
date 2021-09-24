import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CadastroService } from 'src/app/shared/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formularioDeCadastro: FormGroup;

  private sub: Subscription = new Subscription;

  constructor(
    private formbuilder: FormBuilder,
    private cadastroService: CadastroService
  ) {
    this.formularioDeCadastro = this.formbuilder.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      comprovanteResidencial: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.sub = this.formularioDeCadastro.valueChanges.subscribe(valoresNovos => {
      this.cadastroService.save(valoresNovos)
    })

    let dadosAntigos = this.cadastroService.read(1)
    if (dadosAntigos)
      this.formularioDeCadastro.patchValue(dadosAntigos)
  }

  ngOndestoy(): void {
    this.sub.unsubscribe()
  }

  public setcomprovanteResidencial(event: any) {
    let arquivo = event.target.files?.[0]
    this.formularioDeCadastro.patchValue({
      comprovanteResidencial: arquivo
    });
    this.formularioDeCadastro.markAllAsTouched();
  }

  save() {

  }
}
