import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface INavbarOption {
  url: string,
  name: string
}

@Injectable()
export class NavbarService {

  private _opts: BehaviorSubject<INavbarOption[]>;

  get options(): Observable<INavbarOption[]> { return this._opts.asObservable() }

  constructor() {
    this._opts = new BehaviorSubject<INavbarOption[]>(null)
  }

  setOptions(options: INavbarOption[]) {
    this._opts.next(options)
  }

  clear() { this._opts.next(null) }
}