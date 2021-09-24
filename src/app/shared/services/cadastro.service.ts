import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  save(cadastro: any) {
    window.localStorage.setItem('logCaDASTRO', JSON.stringify(cadastro))
  }

  read(id: number): { nomeCompleto: string, comprovanteResidencial: File } | null {
    let dadosAntigos = window.localStorage.getItem('logCaDASTRO')
    if (dadosAntigos)
      return JSON.parse(dadosAntigos)
    return null
  }
}
