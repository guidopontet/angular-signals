import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoReactiveComponent } from './components/no-reactive/no-reactive.component';
import { SignalsComponent } from './components/signals/signals.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    NoReactiveComponent,
    SignalsComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
