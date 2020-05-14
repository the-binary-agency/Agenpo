import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WalletComponent } from './views/wallet/wallet.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TraderComponent } from './views/trader/trader.component';
import { PositionComponent } from './views/position/position.component';
import { TransactionsComponent } from './views/transactions/transactions.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "wallet", component: WalletComponent },
  { path: "profile", component: ProfileComponent },
  { path: "trader", component: TraderComponent },
  { path: "position", component: PositionComponent },
  { path: "transactions", component: TransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
