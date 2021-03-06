import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }  from './app-routing.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service';




@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  RouterModule,
  ],
  declarations: [
                  AppComponent,
                  HeroesComponent,
                  HeroDetailComponent,
                  DashboardComponent,
                  HeroSearchComponent,
                ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
