import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterState, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
