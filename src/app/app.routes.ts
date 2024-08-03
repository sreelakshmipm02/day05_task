import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"products",component:ProductsComponent},
    {path:"contact",component:ContactComponent},
    {path:"products/id",component:SingleComponent}

];
