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
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChildInputComponent,
    GetSetUseComponent,
    OnchangeWorkComponent,
    OutputWorkComponent,
    TwoWayBindingComponent,
    HeroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
