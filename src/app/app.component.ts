import { Component, computed, signal } from '@angular/core';
import { BarraLateralComponent } from "./componentes/barra-lateral/barra-lateral.component";
import { ApresentacaoComponent } from "./componentes/apresentacao/apresentacao.component";
import { SaldoComponent } from "./componentes/saldo/saldo.component";
import { TransacoesComponent } from "./componentes/transacoes/transacoes.component";
import { ContasComponent } from "./componentes/contas/contas.component";
import { Conta } from './modelos/conta';

@Component({
  selector: 'app-root',
  imports: [BarraLateralComponent, ApresentacaoComponent, SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

  saldo = computed(() => {
    return this.contas().reduce((acc, conta) => {
      return acc + conta.saldo;
    }, 0);
  });
}
