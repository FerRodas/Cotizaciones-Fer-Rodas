import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  listCotizacion: any[] = [
    {titulo: 'Fernando Rodas', peso: '20kg', ancho: '20cm', alto: '30cm', largo: '200cm', pais: 'guatemala'},
    {titulo: 'Edgar Robles', peso: '25kg', ancho: '85cm', alto: '10cm', largo: '200cm', pais: 'Belice'},
  ];
  
  form: FormGroup;


  constructor(private f: FormBuilder) {
    this.form = this.f.group({
      titulo: ['', Validators.required],
      peso: ['', Validators.required],
      ancho: ['', Validators.required],
      alto: ['', Validators.required],
      largo: ['', Validators.required],
      pais: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarcotizacion(){
    console.log(this.form);


    const coti: any = {
      titulo: this.form.get('titulo')?.value,
      peso: this.form.get('peso')?.value,
      ancho: this.form.get('ancho')?.value,
      alto: this.form.get('alto')?.value,
      largo: this.form.get('largo')?.value,
      pais: this.form.get('pais')?.value,
    }
    this.listCotizacion.push(coti)
    this.form.reset();
  }

  eliminarcoti(index: number){
    this.listCotizacion.splice(index, 1);
  }

}
