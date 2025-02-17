import { Component, signal } from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { ContaComponent } from "./conta/conta.component";
import { Conta } from '../../modelos/conta';

@Component({
  selector: 'app-contas',
  imports: [BotaoComponent, ContaComponent],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent {
  contas = signal<Conta[]>([
    {
      banco: 'Anybank',
      saldo: 1200
    },
    {
      banco: 'Bytebank',
      saldo: 800
    },
    {
      banco: 'Switch Bank',
      saldo: 1800
    },
  ]);
}
