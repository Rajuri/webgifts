import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Import your library
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaymentComponent } from './payment/payment.component';

import { ColorPickModule } from './color-pick/color-pick.module';

@NgModule({
  declarations: [AppComponent, MenuComponent, PaymentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ColorPickModule],
  exports: [ColorPickModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
