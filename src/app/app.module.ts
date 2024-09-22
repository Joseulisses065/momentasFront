import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListMomentsComponent } from './components/shared/list-moments/list-moments.component';
import {HeaderComponent} from "./components/shared/header/header.component";
import {FooterComponent} from "./components/shared/footer/footer.component";
import { ShareComponent } from './components/share/share.component';
import { AbautComponent } from './components/abaut/abaut.component';
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/shared/search/search.component";
import { MomentDetailsComponent } from './components/moment-details/moment-details.component';
import { FormComponent } from './components/shared/form/form.component';
import { EditarMomentComponent } from './components/editar-moment/editar-moment.component';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { MessagesComponent } from './components/shared/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ListMomentsComponent,
    HeaderComponent,
    FooterComponent,
    ShareComponent,
    AbautComponent,
    MomentDetailsComponent,
    FormComponent,
    EditarMomentComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
