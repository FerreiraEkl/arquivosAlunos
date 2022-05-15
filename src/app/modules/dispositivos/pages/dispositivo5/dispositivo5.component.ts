import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dispositivo5',
  templateUrl: './dispositivo5.component.html',
  styleUrls: ['./dispositivo5.component.css']
})
export class Dispositivo5Component implements OnInit {
  public dispositivosForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.dispositivosForm = this.formbuilder.group({
     
      
    })
  }

  ngOnInit(): void {

  }
}
