import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountrySuggestComponent } from './country-suggest/country-suggest.component';
import { CountrySuggestService } from './country-suggest/country-suggest.service';
import { TextHighlightPipe } from './pipes/text-highlight.pipe';

@NgModule({
  declarations: [AppComponent, CountrySuggestComponent, TextHighlightPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CountrySuggestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
