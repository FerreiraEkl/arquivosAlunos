import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

const PERMISSION = "DISPOSITIVOS_READ"

@Injectable()
export class DispositivosGuard implements CanActivate {
  constructor(
    private router: Router,
    private permissionService: NgxPermissionsService
  ) { }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (await this.permissionService.hasPermission(PERMISSION)) { return true }
    this.router.navigate(['']);
    return false;
  }
}