import { Component } from '@angular/core';
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
    imports: [TodoListItemComponent]
})
export class TodoListComponent {

}
