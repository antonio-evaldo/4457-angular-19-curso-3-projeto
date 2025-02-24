import { Component, input, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";

@Component({
  selector: 'app-botao-nova-transacao',
  imports: [BotaoComponent, ModalComponent],
  templateUrl: './botao-nova-transacao.component.html',
  styleUrl: './botao-nova-transacao.component.css'
})
export class BotaoNovaTransacaoComponent {
  modalAberto = signal(false);

  abrirModal() {
    this.modalAberto.set(true);
  }
}
