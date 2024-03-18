import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PianoDetailsComponent } from './piano-details/piano-details.component';
import { PianoByTypeComponent } from './piano-by-type/piano-by-type.component';
import { PianoCardComponent } from './piano-card/piano-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PianoDetailsComponent,
    PianoByTypeComponent,
    PianoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
