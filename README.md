# Workshop Angular

## EX.4

### refactoring to presenter/container pattern

- generate 2 components: 
```bash
npx ng g c pages/new-todo-page
npx ng g c pages/todo-overview-page
```
- move all the styles, html and typescript from the `todo-app` component to the `todo-overview` page. Watch out with the typescript, you can't just copy paste everything! Delete the `todo-app` component.


### using the router
- Add configuration to the `app.routes.ts` files: 
    - the `''` path should show the `todo-overview` page
    - the `'new'` page should show the `new-todo` page

replace the `<app-todo-app/>` component usage in the `app.component.html` with `<router-outlet/>`. don't forget to import the router-outlet and remove the import to the `todo-app` component.

- the app should now work again like before.

### adding links
- add a an `<a>New Todo</a>` element with a `routerLink` (don't forget to import) to the new-todo page. Add this `<a>` element in the `todo-list` component at the bottom.

- on the `new-todo` page, add a link back to the `/` path.
