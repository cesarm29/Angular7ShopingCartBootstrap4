import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

//const routes
const routes: Routes = [
    {
        //route to cart
        path: 'cart',
        component: CartComponent,
    },
    {
        //route to products
        path: '',
        component: ProductsComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
