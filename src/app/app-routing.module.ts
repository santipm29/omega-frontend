import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent} from './order/create/create.component';
import { EditComponent } from './order/edit/edit.component';
import { ConsultComponent } from './order/consult/consult.component';
import { ConfirmComponent } from './order/confirm/confirm.component';
import { PendingComponent } from './order/pending/pending.component';
import { ProviderComponent } from './provider/provider.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { UserComponent } from './users/user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'home' , component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'login' , component: LoginComponent},
  {path: 'order/create' , component: CreateComponent, canActivate: [AuthenticationGuard]},
  {path: 'order/edit', component: EditComponent, canActivate: [AuthenticationGuard]},
  {path: 'order/consult/:codigoPedido' , component: ConsultComponent, canActivate: [AuthenticationGuard]},
  {path: 'order/confirm' , component: ConfirmComponent, canActivate: [AuthenticationGuard]},
  {path: 'order/pending', component: PendingComponent, canActivate: [AuthenticationGuard]},
  {path: 'provider' , component: ProviderComponent, canActivate: [AuthenticationGuard]},
  {path: 'user/create', component: UserComponent, canActivate: [AuthenticationGuard]},
  {path: 'report' , component: ReportComponent, canActivate: [AuthenticationGuard]},
  {path: '**', component:PagenotfoundComponent, canActivate: [AuthenticationGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
