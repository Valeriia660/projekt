import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayComponent } from './pay/pay.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { StarComponent } from './star/star.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowComponent } from './show/show.component';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { SocialComponent } from './social/social.component';
import { ProfilComponent } from './profil/profil.component';
import { RegComponent } from './reg/reg.component';
import { EntComponent } from './ent/ent.component';

@NgModule({
  declarations: [
    AppComponent,
    PayComponent,
    AboutComponent,
    BasketComponent,
    StarComponent,
    HomeComponent,
    NotFoundComponent,
    ShowComponent,
    CatalogComponent,
    SocialComponent,
    ProfilComponent,
    RegComponent,
    EntComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
