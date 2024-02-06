import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-todo-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './new-todo-page.component.html',
  styleUrl: './new-todo-page.component.css'
})
export class NewTodoPageComponent {
  todoService = inject(TodoService);

  newTodoText = '';

  addTodo() {
    this.todoService.addTodo(this.newTodoText);
  }
}
