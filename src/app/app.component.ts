import { Component, computed, OnInit, signal } from '@angular/core';
import { BarraLateralComponent } from "./componentes/barra-lateral/barra-lateral.component";
import { ApresentacaoComponent } from "./componentes/apresentacao/apresentacao.component";
import { SaldoComponent } from "./componentes/saldo/saldo.component";
import { TransacoesComponent } from "./componentes/transacoes/transacoes.component";
import { ContasComponent } from "./componentes/contas/contas.component";
import { Conta } from './modelos/conta';
import { TipoTransacao, Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BarraLateralComponent, ApresentacaoComponent, SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  transacoes = signal<Transacao[]>([
    {
      id: '5',
      nome: 'Saque no Anybank',
      tipo: TipoTransacao.SAQUE,
      valor: 200,
      data: new Date('2024-10-01T00:00'),
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

  private contasSalvas = [
    {
      nome: 'Anybank',
      saldoInicial: 500,
    },
    {
      nome: 'Bytebank',
      saldoInicial: 100,
    },
    {
      nome: 'Switch Bank',
      saldoInicial: 0,
    },
  ];

  contas = signal<Conta[]>(this.contasSalvas.map(conta => {
    return { ...conta, saldo: conta.saldoInicial }
  }));

  saldo = computed(() => {
    return this.contas().reduce((acc, conta) => {
      return acc + conta.saldo;
    }, 0);
  });

  ngOnInit(): void {
    this.contas.update((contas) => {
      this.contas().forEach((conta) => {
        const novoSaldo = this.calculaNovoSaldo(conta);

        conta.saldo = novoSaldo;
      });

      return contas;
    })
  }

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
}
