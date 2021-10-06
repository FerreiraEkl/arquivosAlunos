import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor() { }

  getEstados(): any[] {
    return [
      { id: 'SC', nome: 'Santa catarina' },
      { id: 'MS', nome: 'Mato grosso do sul' }
    ]
  }
}
