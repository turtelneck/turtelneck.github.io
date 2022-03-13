import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoxesComponent } from './boxes/boxes.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/boxes', pathMatch: 'full' },
  { path: 'detail/:id', component: BoxDetailComponent },
  { path: 'boxes', component: BoxesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}