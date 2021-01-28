import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { EntComponent } from './ent/ent.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PayComponent } from './pay/pay.component';
import { ProfilComponent } from './profil/profil.component';
import { RegComponent } from './reg/reg.component';
import { ShowComponent } from './show/show.component';
import { StarComponent } from './star/star.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pay', component: PayComponent},
  { path: 'about', component: AboutComponent},
  { path: 'reg', component: RegComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'ent', component: EntComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'star', component: StarComponent},
  { path: 'show/:model_id', component: ShowComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
