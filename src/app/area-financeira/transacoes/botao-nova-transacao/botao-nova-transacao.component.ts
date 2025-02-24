import { Component, output, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from "@angular/forms"
import { KeyValuePipe } from '@angular/common';
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';

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
    const novaTransacao = new Transacao(
      this.novaTransacaoForm.nome,
      this.novaTransacaoForm.tipo as TipoTransacao,
      Number(this.novaTransacaoForm.valor),
      this.novaTransacaoForm.data,
      this.novaTransacaoForm.conta
    );

    console.log(novaTransacao);
  }
}
