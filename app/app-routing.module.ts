import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent }   from './manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/manager', pathMatch: 'full' },
  { path: 'manager', component: ManagerComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
