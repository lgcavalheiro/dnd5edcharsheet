import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharSheetComponent } from './char-sheet/char-sheet.component';
import { CharAttributesComponent } from './char-sheet/char-attributes/char-attributes.component';
import { CharHeaderComponent } from './char-sheet/char-header/char-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CharSheetComponent,
    CharAttributesComponent,
    CharHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
