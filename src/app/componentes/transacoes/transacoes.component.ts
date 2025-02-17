import { Component, input } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { TipoTransacao, Transacao } from '../../modelos/transacao';
import { BotaoComponent } from "../botao/botao.component";

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, BotaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();
}
