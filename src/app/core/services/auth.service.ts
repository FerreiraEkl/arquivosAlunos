import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

export interface IUser {
  id?: number,
  userLogin: string;
  userName: string;
}

interface AuthRequest {
  login: string;
  password: string;
}

const DEFAULT_URL = `${environment.api_url}/auth`

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  /**
   * Verifica se o usuário está autenticado.
   * @returns 
   */
  public async isLoggedIn(): Promise<boolean> {
    /**
     * Funcionando de forma local, mas por segurança deve verificar o token
     * na api de serviço configurada conforme exemplo logo abaixo
     */
    const user = this.userService.userInstance;
    if (!user) {
      return false
    }
    return true

    /**
     * Exemplo de validação com utilização de api
     * O Token já está inserido no header da solicitação
     */
    try {
      const authenticatedUser = await this.http.get<IUser>(`${DEFAULT_URL}/isLoggedIn`).toPromise()
      this.userService.setData(authenticatedUser);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Cria uma nova seção para o usuário
   * @param data 
   * @returns 
   */
  async login(data: AuthRequest): Promise<boolean> {
    try {
      // IMPORTANTE CONVERTER AS SOLICITAÇÕES PARA PHP EM FORM DATA //
      const formData = new FormData();

      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });

      // POSSIVEL INFORMAR O FORMATO DE RETORNO NO LUGAR DO ANY
      const response = await this.http.post<any>(`${DEFAULT_URL}`, formData).toPromise()


      // A LISTA DE PERMISSÕES DEVE VIR DO BACKEND
      const permissions = ['CHAMADO_CREATE'];

      if (response.data.us_nome === 'alisson') {
        permissions.push('SERVICO_READ')
      }

      this.userService.setData({
        userLogin: response.data.us_nome,
        userName: response.data.us_nome,
      }, permissions)
      
      return true
    }
    catch (e) {
      console.log(e);
      return false;
    }
  }

  /**
   * Encerra a sessão do usuário
   * @returns 
   */
  public async logout(): Promise<boolean> {
    window.localStorage.clear();
    this.userService.clear();
    return true;
  }
}


