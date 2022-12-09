import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContantComponent } from './contant/contant.component';
import { FooterComponent } from './footer/footer.component';
import { NewModuleModule } from './new-module/new-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContantComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
