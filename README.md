# Amaury react template

---

## Router

+ To start with the router, you have 2 primary components (RouteWithSubRoutes.tsx & SubRouter.tsx) and 1 file with the routes (Routes.ts), to add routes you have to add them in an object to Routes.ts with this parameters:

| parameter | description | type | required | example |
| ------- | ------ | ------- | ------ | ------ |
| path | This is the path to follow | string | yes | "/" |
| component | This is the component you are going to use, import it to the Routes file | FunctionComponent | yes | Home as FC |
| exact | Set it to true to set the path to an exact value | boolean | no | true |
| type | If you have an Auth system yo can select a type of route between hidden, admin and auth, import the types from routesTypes | string | no | routesTypes.auth |
| routes | Open a new array with subroutes, this will need the same parameters as above | Object | no | {path: "/contact", component: Contact as FC }

+ Next you have the RouteWithSubRoutes component, here is a switch where depending on the route type you are going to have different middlewares by default you have 3 one for each type on routesTypes file, you can add more if is needed, you will also need to add a new type for each case created; the component also adds the parent route type to all its childen routes if they don't have a type assigned.

+ The last component is the SubRouter, this component is the one you are going to place in your pages components to create a switch statement, it needs the children routes, if you want to matain your subrouters differenced from your main components you can create a [Component]SubRouter in a new folder and just make the import of the main component and treat the subrouter as children props.

---

## Components

+ You will start with 2 folders:
  + Layouts: Header and Footer components
  + Pages: Home and NotFound components

---

## Hooks

+ useForm; this Hook provides form managment, every writable input will throw strings values, the only parameter is an Object that initializes the hook, it needs the keys of every value needed and its default value it could be an empty string, the return of the hook is going to be the value of each input, a function that is going to manage the input change state and a reset function that expects another initial object.
    > You have to set the input name same as the object parameter, if the input name is for example "email" and you expect a string the object should look like this: {email: ""}, if the input name is different, the handle change function is not going to work.

  + In case of radio inputs you have to set a value to each radio input and set a conditional in the checked function of the input.

  + If you want to use it with a checkbox you have to set a boolean value in the hook and instead of using the function that manage the input change, you have to use the reset function like this:

```javascript
onChange={() => reset({
    ...oldValues,   //You pass the old values
    checkbox: !oldValues.checkbox //You change the old value to its negative
    })} 
```

---

## Empty folders

+ You have a set of empty folders to begin with, these are:
  + actions: Save here the actions for your reducers
  + assets: Save the images and other assets needed
  + firebase: Save firebase configuration
  + helpers: Save halper files
  + reducers: Save your reducers for the App

---

## Styles

Sass is used for styles, here you have many initialized folders and the import of them are in the App.tsx.

Folders structure:

+ styles/
  + abtracts/
    + _mixins.scss `There are initialized mixins for responsive styling`
    + _variables.scss `Here are some initialized variables, fell free to modify them`
  + base/
    + _animations.scss
    +_base.scss `Here are initialized parameters, fell free to modify them but it's not recommended`
    + _typography.scss `There are some tags initialized to begin with`
    +_utilities.scss `There are some tags initialized to begin with`
  + components/
  + layouts/ `All files here are initialized with some tags`
    + _buttons.scss
    +_footer.scss
    + _header.scss
    + _links.scss
  + pages/ `All files here are initialized with some tags`
    + _home.scss
    + _not-found.scss
+ styles.scss `This is the main file, edit here each time you add a new file in any other styles folder`

---

## Libraries

Here are the external libraries that the template use:

+ [animate.css](https://animate.style/)
+ [Moment.js](https://momentjs.com/)
+ [react-router-dom](https://reactrouter.com/web/guides/quick-start)
+ [query-string](https://www.npmjs.com/package/query-string)
+ [redux](https://redux.js.org/)
+ [Sweet Alert 2](https://sweetalert2.github.io/)
+ [Validator](https://github.com/validatorjs/validator.js)
