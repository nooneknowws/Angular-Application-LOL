import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class TelefoneMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');

    if (value.length <= 14) {
      input.value = this.formatPhone(value);
    } else {
      input.value = value.slice(0, 14);
    }
  }

  private formatPhone(value: string): string {
    if (value.length <= 2) {
      return `+${value}`;
    } else if (value.length <= 4) {
      return `+${value.slice(0, 2)} (${value.slice(2)}`;
    } else if (value.length <= 6) {
      return `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4)}`;
    } else if (value.length <= 10) {
      return `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4, 5)}-${value.slice(5)}`;
    } else {
      return `+${value.slice(0, 2)} (${value.slice(2, 4)}) ${value.slice(4, 5)}-${value.slice(5, 9)}-${value.slice(9)}`;
    }
  }
}
