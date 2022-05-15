import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChamadosService } from 'src/app/shared/services/chamados.service';

@Component({
  templateUrl: './listar-chamados.component.html',
  styleUrls: ['./listar-chamados.component.css'],
})
export class ListarChamadosComponent implements OnInit {
  public mask: string = '0000';
  public filterForm: FormGroup;

  public chamados: any[] = [];

  private total = 0;

  constructor(
    private formbuilder: FormBuilder,
    private chamadosService: ChamadosService
  ) {
    this.filterForm = this.formbuilder.group({
      tipoChamado: ['', [Validators.required]],
      page: [1],
      pageSize: [2],
    });

    this.filterForm.valueChanges.subscribe(async () => {
      await this.getChamados();
    });
  }

  public async ngOnInit(): Promise<void> {
    await this.getChamados();
  }

  public async getChamados() {
    const result = await this.chamadosService.readAll(this.filterForm.value);
    this.chamados = result.data.rows || [];
    this.total = result.data.count[0].total;

    console.log(result);
  }

  set pagination(page: number) {
    this.filterForm.get('page').setValue(page);
  }

  get pages() {
    const pages: number[] = [];

    let total = this.total;

    let page = 1;

    while (total > 0) {
      pages.push(page++);
      total -= this.filterForm.get('pageSize').value;
    }

    return pages;
  }
}
