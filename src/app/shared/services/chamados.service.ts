import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const DEFAULT_URL = `${environment.api_url}/chamados`;

@Injectable()
export class ChamadosService {
  constructor(private http: HttpClient) {}

  async create(chamado: any): Promise<any> {
    try {
      let chamadoFormData: FormData = new FormData();
      for (const key of Object.keys(chamado)) {
        const value = chamado[key];
        chamadoFormData.append(key, `${value}`);
      }

      await this.http.post<any>(`${DEFAULT_URL}`, chamadoFormData).toPromise();

      return true;
    } catch {
      return false;
    }
  }

  async read(id: number): Promise<any> {
    try {
      const result = await this.http
        .get<any>(`${DEFAULT_URL}/${id}`)
        .toPromise();
      return result.data;
    } catch {
      return null;
    }
  }

  async readAll(filter: any): Promise<any> {
    return await this.http
      .get<any>(
        `${DEFAULT_URL}?page=${filter.page}&pageSize=${filter.pageSize}`
      )
      .toPromise();
  }
}
