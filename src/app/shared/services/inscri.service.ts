import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscriService {

  constructor(private http: HttpClient) { }

  private readonly rotaPadrao = 'api/inscri';

  async save(formInscri: any): Promise<any> {

    window.localStorage.setItem('registroCache', JSON.stringify(formInscri))

    let fullFormData: FormData = new FormData();
    for (const key of Object.keys(formInscri)) {
      const value = formInscri[key];
      fullFormData.append(key, value);
    }

    // LOCALHOST
    window.localStorage.setItem('registroCache', JSON.stringify(formInscri));

     //API
    await this.http.post<any>(`${this.rotaPadrao}`, fullFormData).toPromise().then((result: any) => {
      return result
    }).catch((err: any) => {
      console.log(err);
      return null
    });
  }

  async read(id: number): Promise<any> {
    // LOCALHOST
    let dadosAntigos = window.localStorage.getItem('registroCache')
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
