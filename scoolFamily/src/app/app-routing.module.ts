import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from './shared/four-ofour/four-ofour.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {path: 'team', loadChildren: () => import('./team/team/team.module').then(m => m.TeamModule)},
  {path: '', component: NavbarComponent},
  {path: '**', component: FourOfourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
