import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="updateCounter(+base)">+ {{ base }}</button>

    {{ counter }}

    <button (click)="updateCounter(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Acumulador App';
  counter: number = 0;
  base: number = 5;

  updateCounter(value: number) {
    this.counter += value;
  }
}
