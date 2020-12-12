import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponentComponent } from './user/add-user-component/add-user-component.component';
import { UpdateUserComponentComponent } from './user/update-user-component/update-user-component.component';
import { UserComponentComponent } from './user/user-component/user-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { ProductComponentComponent } from './product/product-component/product-component.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { PanierComponent } from './Panier/panier/panier.component';
import { AmountComponent } from './Panier/amount/amount.component';
import { CommandeComponent } from './commande/commande.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponentComponent,
    UpdateUserComponentComponent,
    UserComponentComponent,
    LoginComponentComponent,
    ProductComponentComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    PanierComponent,
    AmountComponent,
    CommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastNoAnimationModule.forRoot(),
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: ["http://localhost:4200/login"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
