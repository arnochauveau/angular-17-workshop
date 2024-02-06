import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoListItemComponent, RouterLink],
})
export class TodoListComponent {
  @Input() todos: string[] = [];
  @Output() deleteTodo = new EventEmitter<number>();

}
