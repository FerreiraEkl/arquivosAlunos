import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  constructor(private http: HttpClient) { }

  private readonly rotaPadrao = 'api/cadastros';

  async save(formCadastro: any): Promise<any> {

    window.localStorage.setItem('cadastroCache', JSON.stringify(formCadastro))

    let fullFormData: FormData = new FormData();
    for (const key of Object.keys(formCadastro)) {
      const value = formCadastro[key];
      fullFormData.append(key, value);
    }

    // LOCALHOST
    window.localStorage.setItem('cadastroCache', JSON.stringify(formCadastro))

    // API
    /*await this.http.post<any>(`${this.rotaPadrao}`, fullFormData).toPromise().then((result: any) => {
      return result
    }).catch((err: any) => {
      console.log(err);
      return null
    });*/
  }

  async read(id: number): Promise<any> {
    // LOCALHOST
    let dadosAntigos = window.localStorage.getItem('cadastroCache')
    if (dadosAntigos)
      return JSON.parse(dadosAntigos)
    return null

    // API
    /*return await this.http.get<any>(`${this.rotaPadrao}/${id}`).toPromise().then(request => {
      return request;
    }).catch(() => {
      return null;
    });*/
  }
}
