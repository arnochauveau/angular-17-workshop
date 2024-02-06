import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  router = inject(Router);
  httpClient = inject(HttpClient);

  todos: Todo[] = [];

  amountOfTodos = 0;

  constructor() {
    this.getTodos();
  }

  deleteTodo(id: string) {
    // TODO
  }

  addTodo(todoText: string) {
    // TODO
    this.router.navigateByUrl('');
  }

  private getTodos() {
    // TODO
  }

  private calculateAmountOfTodos() {
    this.amountOfTodos = this.todos.length;
  }
}

export type Todo = {
  id: string;
  text: string;
};
