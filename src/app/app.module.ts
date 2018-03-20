import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TruncateModule} from 'ng2-truncate';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
