import { Routes } from '@angular/router';
import { Home } from './home/home';
import path from 'path';
import { Component } from '@angular/core';
import { About } from './about/about';
import { Default } from './default/default';

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
        path:'',
        redirectTo:'home',
        pathMatch:'full'

    },
    {
        path:'**',
        component:Default
    }
        

];
