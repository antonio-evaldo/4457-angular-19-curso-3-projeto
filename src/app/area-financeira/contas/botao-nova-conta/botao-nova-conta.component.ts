import { Component, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { FormsModule } from '@angular/forms';

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

  aoSubmeter() {

  }
}
