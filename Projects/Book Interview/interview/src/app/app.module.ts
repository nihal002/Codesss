import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookinterviewComponent } from './bookinterview/bookinterview.component';
import { PrepareComponent } from './prepare/prepare.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { InterviewexperienceComponent } from './interviewexperience/interviewexperience.component';

const appRoutes: Routes =[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'prepration',component:PrepareComponent},
  {path:'bookinterview',component:BookinterviewComponent},
  {path:'interviewexperience',component:InterviewexperienceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookinterviewComponent,
    PrepareComponent,
    NavbarComponent,
    CardComponent,
    InterviewexperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
