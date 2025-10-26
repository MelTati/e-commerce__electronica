import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Orders } from './pages/orders/orders';
import { Login} from './pages/login/login';
import { Register } from './pages/register/register';
import { Location } from './pages/location/location';
import { About} from './pages/about/about';
import { Contact} from './pages/contact/contact';
//rutas de busqueda
export const routes: Routes = [
  { path: '', component: Home },                     // Página principal
  { path: 'products', component: Products },         // Lista de productos
  { path: 'product/:id', component: ProductDetail }, // Detalle de producto
  { path: 'cart', component: Cart },                 // Carrito
  { path: 'checkout', component: Checkout},         // Checkout
  { path: 'orders', component: Orders },             // Historial de pedidos
  { path: 'login', component: Login },               // Login
  { path: 'register', component: Register },         // Registro
  { path: 'location', component: Location},          // Ubicación
  { path: 'about', component: About},                //Acerca de
  { path: 'contact', component: Contact},
  { path: '**', redirectTo: '' }                     // Redirección por defecto
];
