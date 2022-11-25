import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpheaderComponent } from './components/upheader/upheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpheaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
