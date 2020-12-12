import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CommandeComponent } from './commande/commande.component';
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { MenuComponent } from './menu/menu.component';
import { PanierComponent } from './Panier/panier/panier.component';
import { ProductComponentComponent } from './product/product-component/product-component.component';
import { AddUserComponentComponent } from './user/add-user-component/add-user-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Commande', component: CommandeComponent,canActivate:[AuthGuard]  },
  { path: 'login', component: LoginComponentComponent },
  { path: 'register', component: AddUserComponentComponent },
  { path: 'Product/:categorieId', component: ProductComponentComponent },
  { path: 'panier', component: PanierComponent,canActivate:[AuthGuard]   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
