import { Component, input, signal } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../compartilhados/transacao.model';
import { BotaoComponent } from "../../compartilhados/botao/botao.component";
import { CardComponent } from "../compartilhados/card/card.component";
import { ModalComponent } from "../../compartilhados/modal/modal.component";

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, BotaoComponent, CardComponent, ModalComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();

  modalAberto = signal(false);

  abrirModal() {
    this.modalAberto.set(true);
  }
}
