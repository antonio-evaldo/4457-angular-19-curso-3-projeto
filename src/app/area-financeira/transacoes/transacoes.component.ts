import { Component, input, output } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../compartilhados/transacao.model';
import { CardComponent } from "../compartilhados/card/card.component";
import { BotaoNovaTransacaoComponent } from "./botao-nova-transacao/botao-nova-transacao.component";
import { Conta } from '../compartilhados/conta.model';

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, CardComponent, BotaoNovaTransacaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();
  contas = input.required<Conta[]>();

  transacaoCriada = output<Transacao>();
}
