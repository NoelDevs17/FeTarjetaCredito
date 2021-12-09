import { Component, OnInit } from '@angular/core';

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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
