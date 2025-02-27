import { Component, computed, signal } from '@angular/core';
import { SaldoComponent } from "./saldo/saldo.component";
import { TransacoesComponent } from "./transacoes/transacoes.component";
import { ContasComponent } from "./contas/contas.component";
import { Conta } from './compartilhados/conta.model';
import { Transacao, TipoTransacao } from './compartilhados/transacao.model';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css'
})
export class AreaFinanceiraComponent {
  transacoes = signal<Transacao[]>([]);

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
      const saldoAtualizado = this.calculaSaldoAtualizado(conta);

      return { ...conta, saldo: saldoAtualizado };
    });
  });

  private calculaSaldoAtualizado(conta: Conta): number {
    return conta.saldo + 20;
  }

  saldo = 50;

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((transacoes) => [transacao, ...transacoes]);
  }

  adicionarConta(conta: Conta) {
    this.contasComSaldoInicial.update((contas) => [...contas, conta]);
  }
}
