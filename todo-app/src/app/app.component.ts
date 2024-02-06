import { Component } from '@angular/core';
import { TodoAppComponent } from './components/todo-app/todo-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
