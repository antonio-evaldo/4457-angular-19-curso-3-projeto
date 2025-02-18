import { Component } from '@angular/core';
import { BarraLateralComponent } from "./componentes/barra-lateral/barra-lateral.component";
import { ApresentacaoComponent } from "./componentes/apresentacao/apresentacao.component";
import { AreaFinanceiraComponent } from "./componentes/area-financeira/area-financeira.component";

@Component({
  selector: 'app-root',
  imports: [BarraLateralComponent, ApresentacaoComponent, AreaFinanceiraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
