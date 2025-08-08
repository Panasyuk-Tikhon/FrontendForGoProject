import { Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent, pathMatch:'full'},
    {path: 'item/:id', component: EditPageComponent, pathMatch:'full'},
    {path: 'add', component: AddNewProductComponent, pathMatch: 'full'}
];
