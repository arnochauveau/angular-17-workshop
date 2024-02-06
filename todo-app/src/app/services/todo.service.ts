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
    this.httpClient.delete(`http://localhost:3000/todos/${id}`).subscribe((_) => this.getTodos());
  }

  addTodo(todoText: string) {
    this.httpClient
      .post('http://localhost:3000/todos', { text: todoText })
      .subscribe((_) => this.getTodos());

    this.router.navigateByUrl('');
  }

  private getTodos() {
    this.httpClient
      .get<Todo[]>('http://localhost:3000/todos')
      .subscribe((todos) => {
        this.todos = todos;
        this.calculateAmountOfTodos();
      });
  }

  private calculateAmountOfTodos() {
    this.amountOfTodos = this.todos.length;
  }
}

export type Todo = {
  id: string;
  text: string;
};
