import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      NumeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      FechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
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
    this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta Registrada');
    this.form.reset();
  }

 

}
