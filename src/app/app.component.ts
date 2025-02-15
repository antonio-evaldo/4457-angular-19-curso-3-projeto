import { Component } from '@angular/core';
import { BarraLateralComponent } from "./componentes/barra-lateral/barra-lateral.component";
import { ApresentacaoComponent } from "./componentes/apresentacao/apresentacao.component";
import { SaldoComponent } from "./componentes/saldo/saldo.component";
import { TransacoesComponent } from "./componentes/transacoes/transacoes.component";
import { ContasComponent } from "./componentes/contas/contas.component";

@Component({
  selector: 'app-root',
  imports: [BarraLateralComponent, ApresentacaoComponent, SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4457-angular-19-curso-3';
}
