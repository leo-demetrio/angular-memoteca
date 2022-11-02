import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregarl-mais',
  templateUrl: './botao-carregarl-mais.component.html',
  styleUrls: ['./botao-carregarl-mais.component.css']
})
export class BotaoCarregarlMaisComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
