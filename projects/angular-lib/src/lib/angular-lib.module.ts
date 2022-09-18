import { NgModule } from '@angular/core';
import { AngularLibComponent } from './angular-lib.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';



@NgModule({
  declarations: [
    AngularLibComponent,
    CounterDemoComponent
  ],
  imports: [
  ],
  exports: [
    AngularLibComponent,CounterDemoComponent
  ]
})
export class AngularLibModule { }
