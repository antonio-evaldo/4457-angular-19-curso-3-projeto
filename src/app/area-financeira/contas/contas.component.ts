import { Component, input } from '@angular/core';
import { ContaComponent } from "./conta/conta.component";
import { Conta } from '../compartilhados/conta.model';
import { CardComponent } from "../compartilhados/card/card.component";
import { BotaoNovaContaComponent } from "./botao-nova-conta/botao-nova-conta.component";

@Component({
  selector: 'app-contas',
  imports: [ContaComponent, CardComponent, BotaoNovaContaComponent],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent {
  contas = input.required<Conta[]>();
}
