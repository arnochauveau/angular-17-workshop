import { Component, inject } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoMetricsComponent } from '../todo-metrics/todo-metrics.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
  imports: [TodoListComponent, TodoMetricsComponent],
})
export class TodoAppComponent {
  todoService = inject(TodoService);

  showMetrics = true;

  toggleMetrics() {
    this.showMetrics = !this.showMetrics;
  }
}
