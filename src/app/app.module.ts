import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { GetSetUseComponent } from './get-set-use/get-set-use.component';
import { OnchangeWorkComponent } from './onchange-work/onchange-work.component';
import { OutputWorkComponent } from './output-work/output-work.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChildInputComponent,
    GetSetUseComponent,
    OnchangeWorkComponent,
    OutputWorkComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
