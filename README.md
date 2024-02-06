# Workshop Angular

## EX.6

- In order to try out the HTTPclient, a new npm script was added to the package.json. Run the following alongside the angular dev server to host a local API server:
```
npm run server
```

- Because the server doesn't support string arrays, I refactored the app for you to support Todo objects.

- in the app.config.ts file, add the HttpClientProvider:
```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
```

- in the Todo service, some methods now have placeholder comments. Try figuring out how to use the HttpClient to delete, post and get the todos from http://localhost:3000/todos. After delete and post, the todos should be fetched again. After the get request, the todos array should be updated and the `calculateAmountOfTodos()` function should be called
