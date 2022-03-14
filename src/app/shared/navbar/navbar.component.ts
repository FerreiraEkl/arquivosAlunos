import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { INavbarOption, NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: IUser;
  public navbarItens: INavbarOption[];

  constructor(private userService: UserService, private navbar: NavbarService) { }

  ngOnInit(): void {
    this.userService.user.subscribe(user => { this.user = user })

    this.navbar.options.subscribe(opts => {
      this.navbarItens = opts;
    })
  }
}
