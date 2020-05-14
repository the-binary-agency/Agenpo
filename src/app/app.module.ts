import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartsModule } from 'ng2-charts';
import { WalletComponent } from './views/wallet/wallet.component';
import { NavService } from './services/nav.service';
import { HomeComponent } from './views/home/home.component';
import { MatModule } from './components/mat.module';
import { ProfileComponent } from './views/profile/profile.component';
import { TraderComponent } from './views/trader/trader.component';
import { PositionComponent } from './views/position/position.component';
import { TransactionsComponent } from './views/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    HeaderComponent,
    WalletComponent,
    ProfileComponent,
    TraderComponent,
    PositionComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatModule,
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
