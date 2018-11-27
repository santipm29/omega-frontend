import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent} from './order/create/create.component';
import { EditComponent } from './order/edit/edit.component';
import { ConsultComponent } from './order/consult/consult.component';
import { ConfirmComponent } from './order/confirm/confirm.component';
import { MenuComponent } from './menu/menu.component';
import { ProviderComponent } from './provider/provider.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { UserComponent } from './users/user/user.component';
import { PendingComponent } from './order/pending/pending.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    ConsultComponent,
    ConfirmComponent,
    MenuComponent,
    ProviderComponent,
    UserComponent,
    PendingComponent,
    PagenotfoundComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, 
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
  constructor(){}
  
}
