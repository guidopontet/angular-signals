import { Component } from '@angular/core';

import { BehaviorSubject, map, combineLatest, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent {

  public value1$ = new BehaviorSubject(10);
  public value2$ = new BehaviorSubject(20);

  public doubleValue1$ = this.value1$
    .pipe(
      map((value) => value *2)
    );

  public sumValues$ = combineLatest([this.value1$, this.value2$])
    .pipe(
      // tap(console.warn),
      map(([value, value2]) => value + value2)
    )

  // ==================
  // Helpers
  // ==================
  public changeValues() {
    this.value1$.next(15);
  }
}
