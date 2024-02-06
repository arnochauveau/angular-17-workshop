import { Component } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoListItemComponent],
})
export class TodoListComponent {
  todos = [
    'reis ver',
    'drink wijn',
    'denk na',
    'lach hard',
    'duik diep',
    'kom terug',
  ];


  deleteTodo(index: number) {
    const todoToDelete = this.todos[index];
    this.todos = this.todos.filter(t => t !== todoToDelete);
  }
}
