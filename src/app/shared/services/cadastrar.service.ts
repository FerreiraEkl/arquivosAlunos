import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  constructor(private http: HttpClient) { }

  private readonly rotaPadrao = 'api/cadastrar';

  async save(cadastrar: any): Promise<any> {

    window.localStorage.setItem('logCaDASTRAR', JSON.stringify(cadastrar))

    let fullFormData: FormData = new FormData();
    for (const key of Object.keys(cadastrar)) {
      const value = cadastrar[key];
      fullFormData.append(key, value);
    }

    // LOCALHOST
    window.localStorage.setItem('logCaDASTRAR', JSON.stringify(cadastrar))

    // API
    await this.http.post<any>(`${this.rotaPadrao}`, fullFormData).toPromise().then((result: any) => {
      return result
    }).catch((err: any) => {
      console.log(err);
      return null
    });
  }

  async read(id: number): Promise<{ nome: string; foto: File; } | null> {
    // LOCALHOST
    let dadosAntigos = window.localStorage.getItem('logCaDASTRAR')
    if (dadosAntigos)
      return JSON.parse(dadosAntigos)
    return null

    // API
    return await this.http.get<any>(`${this.rotaPadrao}/${id}`).toPromise().then(request => {
      return request;
    }).catch(() => {
      return null;
    });
  }
}
