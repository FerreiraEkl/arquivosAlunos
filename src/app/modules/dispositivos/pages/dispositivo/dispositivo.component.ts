import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {
  public mask: string = '0000';
  public mask1: string = '000000000000000';
  public mask2: string = '(00)00000-0000';
  public dispositivosForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.dispositivosForm = this.formbuilder.group({
      Nome: ['', [Validators.required]],
      Localização: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {

  }
}
