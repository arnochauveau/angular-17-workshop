import { Routes } from '@angular/router';
import { NewTodoPageComponent } from './pages/new-todo-page/new-todo-page.component';
import { TodoOverviewPageComponent } from './pages/todo-overview-page/todo-overview-page.component';

export const routes: Routes = [
  { path: '', component: TodoOverviewPageComponent },
  {path: 'new', component: NewTodoPageComponent}
];
