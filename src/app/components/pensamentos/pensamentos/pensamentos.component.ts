import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
}

  constructor() { }

  ngOnInit(): void {
  }
  criarPensamento(){
    alert("criar")
  }
  cancelar(){
    alert("cancelar")
  }

}