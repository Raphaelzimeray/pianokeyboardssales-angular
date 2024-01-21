import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PianoDetailsComponent } from './piano-details/piano-details.component';
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
    path: 'pianobytype/:type',
    component : PianoByTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
