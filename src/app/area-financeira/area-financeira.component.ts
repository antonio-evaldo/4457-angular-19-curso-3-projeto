import { Component, computed, signal } from '@angular/core';
import { SaldoComponent } from "./saldo/saldo.component";
import { TransacoesComponent } from "./transacoes/transacoes.component";
import { ContasComponent } from "./contas/contas.component";
import { Conta } from '../modelos/conta';
import { Transacao, TipoTransacao } from '../modelos/transacao';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css'
})
export class AreaFinanceiraComponent {
  transacoes = signal<Transacao[]>([
    {
      id: '5',
      nome: 'Saque no Anybank',
      tipo: TipoTransacao.SAQUE,
      valor: 200,
      data: new Date('2024-10-03T00:00'),
      conta: 'Anybank'
    },
    {
      id: '4',
      nome: 'Depósito no Switch Bank',
      tipo: TipoTransacao.DEPOSITO,
      valor: 500,
      data: new Date('2024-10-03T00:00'),
      conta: 'Switch Bank'
    },
    {
      id: '3',
      nome: 'Depósito no Bytebank',
      tipo: TipoTransacao.DEPOSITO,
      valor: 800,
      data: new Date('2024-10-01T00:00'),
      conta: 'Bytebank'
    },
    {
      id: '2',
      nome: 'Freela (2ª parte)',
      tipo: TipoTransacao.DEPOSITO,
      valor: 700,
      data: new Date('2024-10-01T00:00'),
      conta: 'Anybank'
    },
    {
      id: '1',
      nome: 'Freela (1ª parte)',
      tipo: TipoTransacao.DEPOSITO,
      valor: 500,
      data: new Date('2024-10-01T00:00'),
      conta: 'Anybank'
    },
  ]);

  contasComSaldoInicial = signal<Conta[]>([
    {
      nome: 'Anybank',
      saldo: 500,
    },
    {
      nome: 'Bytebank',
      saldo: 100,
    },
    {
      nome: 'Switch Bank',
      saldo: 0,
    },
  ]);

  contas = computed(() => {
    return this.contasComSaldoInicial().map((conta) => {
      const novoSaldo = this.calculaNovoSaldo(conta);

      conta.saldo = novoSaldo;

      return conta;
    });
  });

  private calculaNovoSaldo(conta: Conta): number {
    const transacoesDaConta = this.transacoes().filter((transacao) => transacao.conta === conta.nome);

    const novoSaldo = transacoesDaConta.reduce((acc, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacao.valor;

        case TipoTransacao.SAQUE:
          return acc - transacao.valor;

        default:
          transacao.tipo satisfies never;
          throw new Error('Tipo de transação não identificado.')
      }
    }, conta.saldo);

    return novoSaldo;
  }

  saldo = computed(() => {
    return this.contas().reduce((acc, conta) => {
      return acc + conta.saldo;
    }, 0);
  });
}
