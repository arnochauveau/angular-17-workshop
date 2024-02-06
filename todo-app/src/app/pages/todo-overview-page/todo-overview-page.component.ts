import { Component, inject } from '@angular/core';
import { TodoListComponent } from "../../components/todo-list/todo-list.component";
import { TodoMetricsComponent } from "../../components/todo-metrics/todo-metrics.component";
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-overview-page',
    standalone: true,
    templateUrl: './todo-overview-page.component.html',
    styleUrl: './todo-overview-page.component.css',
    imports: [TodoListComponent, TodoMetricsComponent]
})
export class TodoOverviewPageComponent {
  todoService = inject(TodoService);

  showMetrics = true;

  toggleMetrics() {
    this.showMetrics = !this.showMetrics;
  }
}
