import { Routes } from '@angular/router';
import { Home } from './home/home';
import path from 'path';
import { Component } from '@angular/core';
import { About } from './about/about';
import { Default } from './default/default';
import { Admin } from './admin/admin';
import { Product } from './admin/product/product';
import { Profile } from './admin/profile/profile';
import { Users } from './admin/users/users';
import { Contact } from './contact/contact';

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
        path:'admin',
        component:Admin,
        children:[
            {
                path:'profile',
                component:Profile
            },
            {
                path:'product',
                component:Product
            },
            {
                path:'users',
                component:Users
            }
        ]
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

    },
    {
       path:'**',
       component:Default
    }
    
        

];
