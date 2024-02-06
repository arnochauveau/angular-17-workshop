# Workshop Angular

## EX.3 

### generating a service

- generate a service with the following command: `npx ng g s services/todo` or `npx ng generate service services/todo`
- Add the service to the TodoAppComponent TS by using the `inject()` function.
- Move the array with todos and the deleteTodos function from TodoList to the service.

- pass the todos from the todo app to the todolist with the following configuration:  `@Input() todos: string[] = [];`

- when the button is pressed to commplete a todo, we also want to pass it from the `todo-list-item` component all the way up to the `todo-app` component. From there, we want to call the `deleteTodo` function on the service. You'll need to add this configuration: `@Output() deleteTodo = new EventEmitter<number>();` and you'll need to call the emit function with the index in the following way `(deleteTodo)="deleteTodo.emit($index)"` in the todo-list component and in the following way `(deleteTodo)="todoService.deleteTodo($event)"` in the todo-app component.

### bonus

- expose a property on the service with the amount of todos `amountOfTodos` assign this to the length of the array. 
- when a todo is deleted this property should be decreased by one.
- Pass this property to the `todo-metrics` component via an input and show it in the component.
- If the amount of todos reaches zero, the todo-metrics should show a message `Congrats on completing all todos!`
