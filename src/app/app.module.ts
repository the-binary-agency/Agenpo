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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

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
    TransactionsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NavService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LoginComponent
    // JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
