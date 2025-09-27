import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-solicitud',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './add-edit-solicitud.component.html',
  styleUrl: './add-edit-solicitud.component.scss'
})
export class AddEditSolicitudComponent {
  formSolicitud: FormGroup;
  beneficiarios: { id: string; nombre: string }[] = [];
  servidoresPublicos = [
    { id: 'SAGM990220', nombre: 'MARTIN SANCHEZ GONZALES' },
    { id: 'DIGJ960712', nombre: 'PABLO NAHUM JIMENEZ DE LOS SANTOS' },
  ];

  proveedores = [
    { id: 'proveedora', nombre: 'Proveedor AAA' },
    { id: 'proveedorab', nombre: 'Proveedor BBB' },
  ];

  tipoSolicitud = [
    { id: '1', nombre: 'TRÁMITE ADQUISICIONES' },
    { id: '2', nombre: 'GASTOS A COMPROBAR' },
    { id: '3', nombre: 'PARA PAGO' },
  ];

  documentos: { [campo: string]: File[] } = {};

  constructor(private fb: FormBuilder) {
    this.formSolicitud = this.fb.group({
      folio: ['', Validators.required],
      fecha_solicitud: ['', Validators.required],
      id_programatico_presupuestal: ['', Validators.required],
      id_programa: ['', Validators.required],
      tipo_tramite: ['', Validators.required],
      id_proyecto: ['', Validators.required],
      id_dependencia: ['', Validators.required],
      id_unidadAdm: ['', Validators.required],
      id_beneficiario: ['', Validators.required],
      tipo_beneficiario: ['', Validators.required],
      num_contrato: [''],
      importe: ['', Validators.required],
      importe_letra: ['', Validators.required],
      observaciones: ['', Validators.required],

    });


    this.formSolicitud.get('tipo_beneficiario')?.valueChanges.subscribe((tipo) => {
      if (tipo === 'servidor') {
        this.beneficiarios = this.servidoresPublicos;
        this.formSolicitud.get('num_contrato')?.reset();
      } else if (tipo === 'proveedor') {
        this.beneficiarios = this.proveedores;
      } else {
        this.beneficiarios = [];
      }
      this.formSolicitud.get('id_beneficiario')?.reset();
    });
  }


  actualizarImporteLetra() {
    const rawValue = this.formSolicitud.get('importe')?.value;
    if (rawValue !== null && rawValue !== undefined && rawValue !== '') {
      const valor = parseFloat(rawValue);
      if (!isNaN(valor)) {
        const partes = valor.toFixed(2).split('.');
        const pesos = this.numeroALetras(Number(partes[0]));
        const centavos = partes[1] || '00';
        const texto = `${pesos} pesos ${centavos}/100 M.N.`;
        this.formSolicitud.get('importe_letra')?.setValue(texto);
      } else {
        this.formSolicitud.get('importe_letra')?.setValue('');
      }
    }
  }
  numeroALetras(num: number): string {
    const unidades = [
      '', 'uno', 'dos', 'tres', 'cuatro', 'cinco',
      'seis', 'siete', 'ocho', 'nueve'
    ];

    const especiales: { [key: number]: string } = {
      10: 'diez',
      11: 'once',
      12: 'doce',
      13: 'trece',
      14: 'catorce',
      15: 'quince'
    };

    const decenas = [
      '', '', 'veinte', 'treinta', 'cuarenta',
      'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
    ];

    const centenas = [
      '', 'ciento', 'doscientos', 'trescientos',
      'cuatrocientos', 'quinientos', 'seiscientos',
      'setecientos', 'ochocientos', 'novecientos'
    ];

    if (num === 0) return 'cero';
    if (num === 100) return 'cien';
    let letras = '';
    const millones = Math.floor(num / 1000000);
    const miles = Math.floor((num % 1000000) / 1000);
    const resto = num % 1000;

    if (millones > 0) {
      letras += millones === 1
        ? 'un millón '
        : `${this.convertirGrupo(millones)} millones `;
    }

    if (miles > 0) {
      letras += miles === 1
        ? 'mil '
        : `${this.convertirGrupo(miles)} mil `;
    }

    if (resto > 0) {
      letras += this.convertirGrupo(resto);
    }
    return letras.trim();
  }

  private convertirGrupo(num: number): string {
    const unidades = [
      '', 'uno', 'dos', 'tres', 'cuatro', 'cinco',
      'seis', 'siete', 'ocho', 'nueve'
    ];

    const especiales: { [key: number]: string } = {
      10: 'diez',
      11: 'once',
      12: 'doce',
      13: 'trece',
      14: 'catorce',
      15: 'quince'
    };
    const decenas = [
      '', '', 'veinte', 'treinta', 'cuarenta',
      'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
    ];
    const centenas = [
      '', 'ciento', 'doscientos', 'trescientos',
      'cuatrocientos', 'quinientos', 'seiscientos',
      'setecientos', 'ochocientos', 'novecientos'
    ];
    let output = '';
    const c = Math.floor(num / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;
    if (c > 0) {
      if (c === 1 && d === 0 && u === 0) {
        output += 'cien';
        return output;
      }
      output += centenas[c] + ' ';
    }
    const dosDigitos = d * 10 + u;
    if (dosDigitos > 9 && dosDigitos <= 15) {
      output += especiales[dosDigitos];
    } else if (d === 2 && u !== 0) {
      output += 'veinti' + unidades[u];
    } else {
      if (d > 0) output += decenas[d];
      if (d > 2 && u > 0) output += ' y ';
      if (d !== 2) output += unidades[u];
    }
    return output.trim();
  }

  onFileSelect(event: Event, campo: string, inputRef: HTMLInputElement): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const nuevosArchivos = Array.from(input.files);

      if (!this.documentos[campo]) {
        this.documentos[campo] = [];
      }

      const archivosActuales = this.documentos[campo];
      const totalSize =
        archivosActuales.reduce((acc, file) => acc + file.size, 0) +
        nuevosArchivos.reduce((acc, file) => acc + file.size, 0);

      const maxTotalSize = 5 * 1024 * 1024; // 5MB en bytes

      if (totalSize > maxTotalSize) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "¡Atención!",
          text: `El tamaño total de los archivos no puede exceder los 5MB.`,
          showConfirmButton: false,
          timer: 2000
        });
        inputRef.value = '';
        return;
      }

      const nombresExistentes = archivosActuales.map(f => f.name);
      const archivosNoDuplicados = nuevosArchivos.filter(
        f => !nombresExistentes.includes(f.name)
      );
      this.documentos[campo] = [...archivosActuales, ...archivosNoDuplicados];
      inputRef.value = '';
    }
  }

  eliminarArchivo(campo: string, index: number, inputRef: HTMLInputElement): void {
    if (this.documentos[campo]) {
      this.documentos[campo].splice(index, 1);
      if (this.documentos[campo].length === 0) {
        delete this.documentos[campo];
        inputRef.value = '';
      }
    }
  }

  enviarDatos() {
    console.log(this.formSolicitud.value);
  }
  
}
