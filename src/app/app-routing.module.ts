import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from 'src/pages/not-found/not-found.component';
import { TodoComponent } from 'src/pages/todo/todo.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
