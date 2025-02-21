import { Component, input, viewChild } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { TipoTransacao, Transacao } from '../../../modelos/transacao';
import { BotaoComponent } from "../../botao/botao.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, BotaoComponent, CardComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();

  modal = viewChild('modal');

  abrirModal() {
    console.log(this.modal());
  }
}
