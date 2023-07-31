import { Component } from '@angular/core';

@Component({
  selector: 'app-no-reactive',
  templateUrl: './no-reactive.component.html'
})
export class NoReactiveComponent {
  public value1 = 10;
  public value2 = 20;

  public doubleValue1 = this.value1 * 2;

  public sumValues = this.value1 + this.value2;

  // ==================
  // Helpers
  // ==================
  public changeValues() {
    this.value1 = 15;
  }

  public getDoubleValue1 = () => {
    // console.warn('getDoubleValue1()')
    return this.value1 * 2;
  }
}
