# Workshop Angular

## EX.5

- add a `<form></form>` to the new-todo page's template.
- in the form, add a `<label>` and an `<input>` of type text
- add a button of type `submit`

- in the page's TS file, add a property `newTodoText = '';`
- link the property to the input element with `[(ngModel)]="newTodoText"`

- in the todo service, add a function that appends a new string to the array and then navigates to the overview page:
```ts
 addTodo(todoText: string) {
    this.todos = [...this.todos, todoText];

    this.router.navigateByUrl((''));
  }
```
- add a function to the newTodo page's typescript file that calls the new addTodo function on the service with the value of the property `newTodoText`

- link the `(submit)` event of the form element to this function.
