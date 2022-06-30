import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxI24CircularProgressModule } from 'ngx-i24-circular-progress';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxI24CircularProgressModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
