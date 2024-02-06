# Workshop Angular

## EX.2: 

### Handling user events 

- Add a new property `showMetrics = true;` to the todo-app component's typescript file.
- Add a function `toggleMetrics` to the todo-app component's typescript file. Write code that sets the `showMetrics` to the opposite of it's current value. 

> 🚨 In Typescript (and javascript) classes you need to use `this.` to access properties and functions in the same class. In the template this is automatically handled for you. (e.g. `this.showMetrics` in TS, `showMetrics` in the HTML template).

- in the todo-app component's HTML template, add a button `<button>Toggle Metrics</button>`.
- When the button is clicked, the `toggleMetrics` function should be called. 

### Conditional rendering

- Only show the todo-metrics component when the `showMetrics` property is `true`. Use `@if`-blocks for this.
- When the property is false, show a message: `Metrics hidden` in a `<p>` element.

### Rendering lists

- In our todo-list component TS, add the following array of todos: 
```ts
todos = [
    'reis ver',
    'drink wijn',
    'denk na',
    'lach hard',
    'duik diep',
    'kom terug',
  ];
```
- In the todo-list HTML, add an `<ul>` (unordered list) element. 
- for each element in the todos array, show an `li`-element containing the value. Use the `@for` block for this.
- When the array is empty, `<p>no more todos</p>` should be shown. Use the `@empty` block for this

### Passing data to a child component.

- In the todo-list component, instead of using an `<li>` for each element in the array. Pass the todo to the `todo-list-item` component via an input. 
- The `todo-list-item` should configure an `@Input()`-property called `todo`. 
- The todo should be passed with the box syntax. `[todo]="todo"`.

### Passing events from child to parent.
- in the `todo-list-item` component's template, add a button 'complete'. 
- In the `todo-list-item` component's TS, add the configuration needed for an output event called `deleteTodo`. 
- Emit an event on this output when the complete button is clicked.
- In the `todo-list` component, call a `deleteTodo` function that deletes the todo from the array when the event is triggered. TIP: pass the `$index` variable from the `@for` block as a parameter to this function.

### Bonus:
- Add a bit of styling to the app and remove the test templates. 
