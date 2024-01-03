import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { AssociateComponent } from './component/associate/associate.component';
import { CartComponent } from './modules/public/component/cart/cart.component';

const routes: Routes = [
  {path:'',loadChildren:()=> import('./modules/public/public.module').then((m) => m.PublicModule),},
  {path:'admin',loadChildren:()=> import('./modules/admin/admin.module').then((m) => m.AdminModule),},
  {path:'table',component:TableComponent},
  {path:'form',component:FormdesignComponent},
  {path:'associate',component:AssociateComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
