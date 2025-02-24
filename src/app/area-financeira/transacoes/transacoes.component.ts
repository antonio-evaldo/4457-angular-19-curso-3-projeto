import { Component, input } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../compartilhados/transacao.model';
import { CardComponent } from "../compartilhados/card/card.component";
import { BotaoNovaTransacaoComponent } from "./botao-nova-transacao/botao-nova-transacao.component";

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, CardComponent, BotaoNovaTransacaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();
}
