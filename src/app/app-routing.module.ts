import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { DocComponent } from './doc/doc.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PayComponent } from './pay/pay.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pay', component: PayComponent},
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'star', component: PayComponent},
  { path: 'doc', component: DocComponent},
  { path: 'star', component: PayComponent},
  { path: 'models', component: ModelsComponent},
  { path: 'show/:model_id', component: ShowComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
