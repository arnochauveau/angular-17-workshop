import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {

  @Input() todo: Todo | null = null;

  @Output() deleteTodo = new EventEmitter();

}
