import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-todo-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './new-todo-page.component.html',
  styleUrl: './new-todo-page.component.css'
})
export class NewTodoPageComponent {

}
