import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './auth.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class UserService {
  private _user: BehaviorSubject<IUser>;

  constructor(
    private http: HttpClient,
    private permissions: NgxPermissionsService
  ) {
    this._user = new BehaviorSubject<IUser>(null);
  }

  get user(): Observable<IUser> {
    return this._user.asObservable();
  }

  get userInstance(): IUser {
    return this._user.value;
  }

  /**
   * Atribuir informações do usuário autenticado
   * @param user Usuário
   */
  setData(user: IUser) {
    const permissions: string[] = [];

    if (Array.isArray(user.permissions)) {
      user.permissions.map((p) => {
        permissions.push(p.permissionId);
      });
    } else {
      permissions.push((user.permissions as any).permissionId);
    }
    
    this.permissions.loadPermissions(permissions);
    delete user.permissions;
    this._user.next(user);
  }

  /**
   * Remover as informações do usuário
   */
  clear() {
    this.permissions.loadPermissions([]);
    this._user.next(null);
  }
}
