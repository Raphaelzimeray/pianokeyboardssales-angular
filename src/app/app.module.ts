import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PianoDetailsComponent } from './piano-details/piano-details.component';
import { AcousticPianosComponent } from './acoustic-pianos/acoustic-pianos.component';
import { SceneKeyboardsComponent } from './scene-keyboards/scene-keyboards.component';
import { ElectricPianosComponent } from './electric-pianos/electric-pianos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PianoDetailsComponent,
    AcousticPianosComponent,
    SceneKeyboardsComponent,
    ElectricPianosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
