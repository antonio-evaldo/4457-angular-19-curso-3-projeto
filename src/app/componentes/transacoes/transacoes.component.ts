import { Component, signal } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { TipoTransacao, Transacao } from '../../modelos/transacao';

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
      tipo: TipoTransacao.DEPOSITO,
      valor: 500,
      data: new Date('2024-10-03T00:00'),
      conta: 'Anybank'
    },
    {
      id: '2',
      nome: 'Papelaria Mila',
      tipo: TipoTransacao.SAQUE,
      valor: 80,
      data: new Date('2024-10-01T00:00'),
      conta: 'Bytebank'
    },
    {
      id: '1',
      nome: 'Freela (2ª parte)',
      tipo: TipoTransacao.DEPOSITO,
      valor: 1000,
      data: new Date('2024-10-01T00:00'),
      conta: 'Bytebank'
    }
  ]);
}
