import { Component, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from "@angular/forms"
import { KeyValuePipe } from '@angular/common';
import { TipoTransacao } from '../../compartilhados/transacao.model';

@Component({
  selector: 'app-botao-nova-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe],
  templateUrl: './botao-nova-transacao.component.html',
  styleUrl: './botao-nova-transacao.component.css'
})
export class BotaoNovaTransacaoComponent {
  modalAberto = signal(false);

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: ''
  };

  tiposTransacao = TipoTransacao;

  abrirModal() {
    this.modalAberto.set(true);
  }

  aoSubmeter() {
    console.log(this.novaTransacaoForm);
  }
}
