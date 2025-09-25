import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@siemens/ngx-datatable';

@Component({
  selector: 'app-solicitud',
  imports: [NgxDatatableModule, CommonModule,RouterModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.scss'
})
export class SolicitudComponent {
  originalData: any[] = [];
  temp: any[] = [];
  rows: any[] = [];
  page: number = 0;
  pageSize: number = 10;
  filteredCount: number = 0;
  loading: boolean = true;
  response: any[] = []

  ngOnInit(): void {
    this.originalData = [...this.response];
    this.temp = [...this.originalData];
    this.rows = this.temp;
    this.filteredCount = this.temp.length;
    this.loading = false;
  }

  setPage(pageInfo: any) {
    this.page = pageInfo.offset;
    const start = this.page * this.pageSize;
    const end = start + this.pageSize;
    this.rows = this.temp.slice(start, end);
  }

  updateFilter(event: any) {
    const val = (event.target?.value || '').toLowerCase();
    this.temp = this.originalData.filter((row: any) => {
      const nombreCompleto = (
        row.datos_user?.f_nombre + ' ' +
        row.datos_user?.f_primer_apellido + ' ' +
        row.datos_user?.f_segundo_apellido
      ).toLowerCase() || '';
      const curp = row.datos_user?.f_curp?.toLowerCase() || '';
      return (
        nombreCompleto.includes(val) ||
        curp.includes(val)

      );
    });
    this.filteredCount = this.temp.length;
    this.setPage({ offset: 0 });
  }

}
