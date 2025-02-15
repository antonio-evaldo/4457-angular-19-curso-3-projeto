import { Component } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {

}
