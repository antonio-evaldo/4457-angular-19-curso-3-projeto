import { Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]'
})
export class DestaqueValorNumericoDirective {
  appDestaqueValorNumerico = input.required<number>();

  constructor(elemento: ElementRef) {
    effect(() => {
      if (this.appDestaqueValorNumerico() > 0) {
        elemento.nativeElement.style.color = "var(--destaque-receita)";
      } else if (this.appDestaqueValorNumerico() < 0) {
        elemento.nativeElement.style.color = "var(--destaque-despesa)";
      }
    });
  }
}
