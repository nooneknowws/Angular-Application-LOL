import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remova todos os caracteres não numéricos

    if (value.length > 11) {
      value = value.slice(0, 11); // Limita a 11 caracteres se o valor for maior
    }

    if (value.length <= 3) {
      input.value = value;
    } else if (value.length <= 6) {
      input.value = `${value.slice(0, 3)}.${value.slice(3)}`;
    } else if (value.length <= 9) {
      input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else {
      input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
    }
  }
}

