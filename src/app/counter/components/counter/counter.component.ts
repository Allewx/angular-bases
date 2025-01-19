import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(+1)" class="btn btn-success mt-2"> +1 </button>
  <button (click)="resetCounter()" class="btn btn-secondary mt-2"> Reset </button>
  <button (click)="increaseBy(-1)" class="btn btn-danger mt-2" > -1 </button>

  `
})
export class CounterComponent {

  public counter:number=10;

  increaseBy(value:number) {
   this.counter += value;
  }
  resetCounter():void {
    this.counter = 10;
  }

}
