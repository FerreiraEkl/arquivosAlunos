import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

/** Interface do relacionamento usuário permissão */
export interface IUserPermission {
  userId: number;
  permissionId: string;
}

/** Interface de usuário */
export interface IUser {
  id?: number;
  userLogin: string;
  userName: string;
  permissions: IUserPermission[];
}

/** Interface da solicitação de login */
export interface IAuthRequest {
  login: string;
  password: string;
}

const DEFAULT_URL = `${environment.api_url}/auth`;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  /**
   * Verifica se o usuário está autenticado.
   * @returns
   */
  public async isLoggedIn(): Promise<boolean> {
    /**
     * Exemplo de validação com utilização de api
     * O Token já está inserido no header da solicitação
     */
    try {
      const authenticatedUser = await this.http
        .get<any>(`${DEFAULT_URL}`)
        .toPromise();
      this.userService.setData(authenticatedUser.data);
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
  async login(data: IAuthRequest) {
    // IMPORTANTE CONVERTER AS SOLICITAÇÕES PARA PHP EM FORM DATA //
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const autorization = await this.http
      .post<any>(`${DEFAULT_URL}`, formData)
      .toPromise();

    localStorage.setItem('token', autorization.data);

    await this.isLoggedIn();
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
