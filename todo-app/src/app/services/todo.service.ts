import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  router = inject(Router);

  todos = [
    'reis ver',
    'drink wijn',
    'denk na',
    'lach hard',
    'duik diep',
    'kom terug',
  ];

  amountOfTodos = this.todos.length;

  deleteTodo(index: number) {
    const todoToDelete = this.todos[index];
    this.todos = this.todos.filter((t) => t !== todoToDelete);
    this.amountOfTodos--;
  }

  addTodo(todoText: string) {
    this.todos = [...this.todos, todoText];

    this.router.navigateByUrl((''));
  }
}
