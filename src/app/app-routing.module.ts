import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WalletComponent } from './views/wallet/wallet.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TraderComponent } from './views/trader/trader.component';
import { PositionComponent } from './views/position/position.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { BeforeLoginService } from './auth/before-login.service';
import { AfterLoginService } from './auth/after-login.service';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "wallet", component: WalletComponent,
    canActivate: [ AfterLoginService ]
  },
  {
    path: "profile", component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "trader", component: TraderComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "position", component: PositionComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "transactions", component: TransactionsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "login", component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: "signup", component: SignupComponent,
    canActivate: [BeforeLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
