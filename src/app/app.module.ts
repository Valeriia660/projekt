import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayComponent } from './pay/pay.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { BasketComponent } from './basket/basket.component';
import { StarComponent } from './star/star.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DocComponent } from './doc/doc.component';
import { ModelsComponent } from './models/models.component';
import { ShowComponent } from './show/show.component';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    PayComponent,
    AboutComponent,
    ProfileComponent,
    BasketComponent,
    StarComponent,
    HomeComponent,
    NotFoundComponent,
    DocComponent,
    ModelsComponent,
    ShowComponent,
    CatalogComponent
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
