import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PianoDetailsComponent } from './piano-details/piano-details.component';
import { AcousticPianosComponent } from './acoustic-pianos/acoustic-pianos.component';
import { SceneKeyboardsComponent } from './scene-keyboards/scene-keyboards.component';
import { ElectricPianosComponent } from './electric-pianos/electric-pianos.component';
import { PianoByTypeComponent } from './piano-by-type/piano-by-type.component';

const routes: Routes = [
  {
    path: '',
    component : HomepageComponent
  },
  {
    path: 'pianos/:id',
    component : PianoDetailsComponent
  },
  {
    path: 'acoustic/pianos',
    component : AcousticPianosComponent
  },
  {
    path: 'scene/keyboards',
    component : SceneKeyboardsComponent
  },
  {
    path: 'electric/pianos',
    component : ElectricPianosComponent
  },
  {
    path: 'pianobytype/:type',
    component : PianoByTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
