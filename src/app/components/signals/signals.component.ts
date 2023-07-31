import { Component, effect, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  public value1 = signal(10);
  public value2 = signal(20);

  public doubleValue1 = computed(() => this.value1() * 2);

  public sumValues = computed(() => this.value1() + this.value2());

  // ==================
  // Helpers
  // ==================
  public changeValues() {
    this.value1.set(15);
  }

  constructor() {
    effect(() => {
      console.warn(`Value1: ${this.value1()}`);
    });
  }
}
