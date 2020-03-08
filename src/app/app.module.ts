import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MenuComponent } from './menu/menu.component';
import { ThemesComponent } from './themes/themes.component';
import { MarriageComponent } from './marriage/marriage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    MenuComponent,
    ThemesComponent,
    MarriageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
