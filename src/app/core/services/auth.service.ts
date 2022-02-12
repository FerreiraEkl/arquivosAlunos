import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

const DEFAULT_URL = `${'url do servidor'}/auth`

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
    if (data.login === 'admin' && data.password === 'admin') {
      this.userService.setData({
        userLogin: 'admin',
        userName: 'Admin'
      })
      return true
    }
    return false;

    /**
     * As linhas abaixo descrevem como se utilizaria a integração com o servidor
     */
    try {
      const token = await this.http.post<string>(`${DEFAULT_URL}/login`, { 'login': data.login, 'password': data.password }).toPromise()
      window.localStorage.setItem('token', token);
      return true
    }
    catch {
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


