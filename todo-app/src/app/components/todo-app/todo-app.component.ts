import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoMetricsComponent } from "../todo-metrics/todo-metrics.component";

@Component({
    selector: 'app-todo-app',
    standalone: true,
    templateUrl: './todo-app.component.html',
    styleUrl: './todo-app.component.css',
    imports: [TodoListComponent, TodoMetricsComponent]
})
export class TodoAppComponent {
  appName = 'todo-app dynamic property';
}
