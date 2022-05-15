import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dispositivo4',
  templateUrl: './dispositivo4.component.html',
  styleUrls: ['./dispositivo4.component.css'],
})
export class Dispositivo4Component implements OnInit {
  public mask: string = '(00)00000-0000';
  public mask1: string = '00000-0000';
  public mask2: string = '(00)00000-0000';
  public mask3: string = '(00)';
  public dispositivosForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.dispositivosForm = this.formbuilder.group({
      adilinha: ['', [Validators.required]],
      secretaria: ['p', [Validators.required]],
    })
  }

  ngOnInit(): void {

  }
}
