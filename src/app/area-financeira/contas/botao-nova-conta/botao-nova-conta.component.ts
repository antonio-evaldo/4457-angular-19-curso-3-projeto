import { Component, output, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from '@angular/forms';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-botao-nova-conta',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-nova-conta.component.html',
  styleUrl: './botao-nova-conta.component.css'
})
export class BotaoNovaContaComponent {
  modalAberto = signal(false);

  novaContaForm = {
    nome: '',
    valor: ''
  }

  abrirModal() {
    this.modalAberto.set(true);
  }

  contaCriada = output<Conta>();

  aoSubmeter() {
    const novaConta = new Conta(
      this.novaContaForm.nome,
      Number(this.novaContaForm.valor)
    );

    this.contaCriada.emit(novaConta);
    this.modalAberto.set(false);
  }
}
