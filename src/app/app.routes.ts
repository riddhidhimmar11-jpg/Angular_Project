import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Categories } from './categories/categories';

export const routes: Routes = [
    {
        path:'home',
        component:Home
        
    },
    {
        path:'about',
        component:About

    },
    {

        path:'contact',
        component:Contact
    },
    
    {
                path: 'categories',
                loadChildren: () =>
                import('./categories/categories.routes').then((m) => m.categoriesRoutes),
    },
    
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full',

    }
];
