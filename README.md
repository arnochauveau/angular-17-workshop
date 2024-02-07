# Workshop Angular

## Setting up your dev environment

### Prerequisites
- An IDE like Visual Studio Code or Webstorm
- The Angular Language Service plugin : https://angular.io/guide/language-service#angular-language-service-in-your-editor
- NodeJS version 18.13.X or 20.9.X
- Git

### Generate an Angular project

- run `npm i -g @angular/cli@latest`
- run `ng new` in the angular-workshop folder with your CLI.
- give it the name `todo-app`
- select `CSS` as the stylesheet format.
- select `No` for the SSR and SSG support

You should now have a directory with a working Angular app in it. 
To verify this, `cd` into the `todo-app` folder and run `npm start`.

Open http://localhost:4200/ in your browser to verify that the app works.

### Your first component

- In the todo-app generate a new component in the `components` folder called `todo-app` 

`npx ng generate component components/todo-app`


### Using your component
- In the appcomponent's typescript file, remove the contents of the `imports` array and add your component's typescript class name `TodoAppComponent`.Your editor should automatically assist you with adding the typescipt import `import { TodoAppComponent } from './components/todo-app/todo-app.component';`. 

- In your appcomponent's HTML(template) file, remove all the pregenerated code and add your newly generated component:
`<app-todo-app/>`

- Try running your app, you should see `todo-app works` in your browser.

### Dynamic data 
- Add a property to the todo-app component's class `appName = 'todo-app dynamic property';` 
- in your todo-app component's HTML template, use the `{{}}` syntax to show the value in the `<p></p>`element

### generate the rest of the app components. 
- In the `components` folder, generate the following components: todo-list, todo-listitem and todo-metrics.
- Show the todo-list and todo-metrics in the todo-app component
- The todo-list-item should be shown in the todo-list component.
