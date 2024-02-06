import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-metrics',
  standalone: true,
  imports: [],
  templateUrl: './todo-metrics.component.html',
  styleUrl: './todo-metrics.component.css'
})
export class TodoMetricsComponent {
  @Input() amountOfTodos = 0;
}
