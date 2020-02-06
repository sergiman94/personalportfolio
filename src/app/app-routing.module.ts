import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnglishComponent } from './components/english/english.component';
import { EspanolComponent } from './components/espanol/espanol.component';


const routes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  {path: 'en', component:EnglishComponent},
  {path: 'es', component:EspanolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
