import { Component, input } from '@angular/core';
import { BotaoComponent } from "../../botao/botao.component";
import { ContaComponent } from "./conta/conta.component";
import { Conta } from '../../../modelos/conta';

@Component({
  selector: 'app-contas',
  imports: [BotaoComponent, ContaComponent],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent {
  contas = input.required<Conta[]>();
}
