import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private sevice: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['',Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['',Validators.compose([Validators.required])]
    })
  }

  criarPensamento(){
    if(this.formulario.valid){
      this.sevice.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarpensamento'])
      });
    }    
  }

  cancelarPensamento(){
    this.router.navigate(['/listarpensamento'])
  }
  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    }
    return 'botao__desabilitado'
  }

}
