import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
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
}
