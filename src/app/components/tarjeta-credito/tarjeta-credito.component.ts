import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listaTarjetas: any[] = [
    {titulo: 'Noel Ortiz', NumeroTarjeta: '241235426423', FechaExpiracion: '12/23', cvv: '436' },
    {titulo: 'Noelia Ortiz', NumeroTarjeta: '241235426423', FechaExpiracion: '12/24', cvv: '436' },
    {titulo: 'Eridania Sanchez', NumeroTarjeta: '241235426423', FechaExpiracion: '01/30', cvv: '436' }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: [''],
      NumeroTarjeta: [''],
      FechaExpiracion: [''],
      cvv: ['']
    })
   }

  ngOnInit(): void {

  }

  agregarTarjeta(){
    console.log(this.form);

    const tarjeta: any = {
      titulo: this.form.get("titulo")?.value,
      NumeroTarjeta: this.form.get("NumeroTarjeta")?.value,
      FechaExpiracion: this.form.get("FechaExpiracion")?.value,
      cvv: this.form.get("cvv")?.value
    }
    this.listaTarjetas.push(tarjeta)
    this.form.reset();
  }

}
