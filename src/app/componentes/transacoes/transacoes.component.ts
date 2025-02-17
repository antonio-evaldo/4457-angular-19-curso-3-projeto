import { Component, signal } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = signal<Transacao[]>([
    {
      id: '3',
      nome: 'iFood',
      valor: 500,
      data: new Date('2024-10-03T00:00'),
      categoria: 'Alimentação',
      conta: 'Anybank'
    },
    {
      id: '2',
      nome: 'Papelaria Mila',
      valor: -80,
      data: new Date('2024-10-01T00:00'),
      categoria: 'Papelaria',
      conta: 'Bytebank'
    },
    {
      id: '1',
      nome: 'Freela (2ª parte)',
      valor: 1000,
      data: new Date('2024-10-01T00:00'),
      categoria: 'Trabalho',
      conta: 'Bytebank'
    }
  ]);
}
