import { Component } from '@angular/core';
import { BarraLateralComponent } from "./componentes/barra-lateral/barra-lateral.component";

@Component({
  selector: 'app-root',
  imports: [BarraLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4457-angular-19-curso-3';
}
