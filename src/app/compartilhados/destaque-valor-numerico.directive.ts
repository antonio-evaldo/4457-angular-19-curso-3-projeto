import { Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]'
})
export class DestaqueValorNumericoDirective {
  appDestaqueValorNumerico = input.required<number>();

  constructor(elemento: ElementRef) {
    console.log(this.appDestaqueValorNumerico());

    elemento.nativeElement.style.color = "var(--destaque-receita)";
  }
}
