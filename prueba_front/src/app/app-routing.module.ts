import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/user/login/login.component';
import { ListProductsComponent } from 'src/app/components/list-products/list-products.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list-products', component: ListProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
