import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './services/auth.service';
import {RequestInterceptorService} from './services/request-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SnackBarService} from './services/snack-bar.service';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MaterialIconsService} from './services/material-icons.service';
import {MatSelectModule} from '@angular/material/select';
import { ClientPageComponent } from './pages/main-page/components/client-page/client-page.component';
import { ShopPageComponent } from './pages/main-page/components/shop-page/shop-page.component';
import { AdminPageComponent } from './pages/main-page/components/admin-page/admin-page.component';
import {CashbackService} from './services/cashback.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    ClientPageComponent,
    ShopPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    SnackBarService,
    MaterialIconsService,
    CashbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
