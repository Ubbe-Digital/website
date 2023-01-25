import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DocComponent } from './doc/doc.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes =[
    { path: '', redirectTo: '', pathMatch: 'full', component: LandingComponent },
    { path: 'docs', component: DocComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false,
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
