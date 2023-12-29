
# Learning React
This is my notes while learning the popular React with this video: 
[React Tutorial for Beginners - Programming with Mosh](https://www.youtube.com/watch?v=SqcY0GlETPk)

## What is react?
React is the most popular JS library to create modern webapps which are reactive. It was created at Meta(earlier known as facebook).

## Setting up the Development Environment
1. Install VS code. It is one of the most popular IDE today, we can choose any IDE. Any text editor works as well. **Prettier Extension is also recommended with "format on save" enabled.**
2. Latest Node LTS must be installed as well. Go to nodejs website to check the latest LTS version and check the one in your machine by `node -v`. If it is old, it should be updated, if it does not exist it must installed with `install node`.

## Creating a react app
It can be installed with the official CRA(create-react-app) but in the tutorial vite is used. 

### First Install vite if not installed already.
`install vite`

### Run the following command to create a vite project and follow the prompts correctly
`npm create vite@latest`

### change directory to the project
`cd react-app` or whatever is the name of the directory

### install all the dependencies
`npm i`

### open the directory in VS code with the following command:
`code .`

### run the web server
`npm run dev`


## Project Structure
1. `node_modules` directory: all dependencies are here, not to be touched. 
2. `public` directory. All public assets like images, svg etc.
3. `src directory`. we write code here. index.html is the entry point.
4. `package.json`. do not change anything unless you know what you are doing.
5. `tsconfig.json` do not change unless you are an advanced user.
6. `vite.config.ts` do not touch

## Creating a react component
Everything in react is component. button, grids, navbar, cards etc. each page is built with several components. One component can also be built with other sub-component.

create a new .tsx file for a new component.
.ts for simple ts files
tsx for react components
first letter of the .tsx filename should be capital by convention like Message.tsx.

components are function-based. there are some legacy code with class-based components.
class is legacy in react, always use function
first letter each word in the  function name is capital, PascalCasing.
Message, SendMessage, DisplayAlertMessage
The name of the function and the name of the file is same. So, if the filename is Message.tsx, the name of the function is Message()
the function will return JSX (javascript XMS), check babel.io/repl to understand how JSX will return
in Message.tsx return hello world with H1 tag as JSX
then export it

now go to App.tsx and delete everything
import Message
write function to return the Message JSX and export it


## How react works
Virtual dom
react-dom is a dependency in the project.

## React Ecosystem
It is just UI library which helps with building dynamic modern web apps. There are several other librararies which can help with other features like forms, validation, animation etc.

## Creating a ListGroup Component
install bootstrap
npm i bootstrop

delete the styling by vite delete contents of app.css and delete the file index.css.
in main.tx, no need to import default css, and import bootstrap 'bootstrap/dist/css/bootstrap.css'.
go to the page and check if bootstrap has been imported and included in the project.


all components in "components" folders
going to add a listgroup component, what should be the name the file?
it should have a function and then export this function
text "List group" in H1 to tell that it is a listgroup.
copy some code from bootstrap to show the listgroup
first problem: class is a reserved kw in JS/TS, change it to className.
learn to use multi cursor mode in VS code , (ctrl+D), and then ESC to exit the multi cursor more
View > command pallete > format document > set perttier as the default formatter
how to search files in VScode
paranthesis is required around multiline JSX

## Fragments
since React calls createDOM, each component can only have one root element, but if we need to send more than one HTML element there are three ways
1. Wrap all elements in a single div, cons: we created an extra div
2. import fragments from react and then wrap all HTML elements in a single `<fragment>`. cons: we have to import from react
3. wrap it within `<>` and `</>`, these empty angle brackets same as fragments

## Rendering list
how to render the list when we have an array of strings?

there is no for loop in JSX. So, when we have a list of items, then we map it to create JSX. since code is not allowed in JSX, we wrap it in {}
**each child in a list should have a unique "key" property so that react can identify each element, it is generally the id when the data is coming from an API** Since, we don't have an id here, we can use the the strings for the key as a workouround.

## Conditional Rendering
what if there are no items? two ways:
1. use if to return different items. but there is repitition
2.. use terninary operator, use a const variable or use another function to get the message, short circuit


## Handling Events

onclick, if it simple, the function can be inline
but generally it is not the case, so better to have a separate funciton.
As a convention, the handler should start with the word "handle", something like handleClick works.
but the problem we would run into is with the typescript,
so we need to import the type of event from react and use it 

## Managing State

change class on click
useState, initialize with a value, returns an array of two items: a value, and a set method to update that value.
Each component has their own state.

## Passing data via props

create interface to recieve props
destructure it while recieving

## passing functions via props
same as before mostly. the name of the passed function starts with handle, and it is received by the name starting with "on".

## State vs Props
**STATE**: Data managed by a component, similar to local variables, mutable

**PROPS**: Input passed to a component, similar to function aguments, immutable

## Passing Children
Es7+ react redux VS code extension, this helps with adding boiler plate code to react components to speed the development process.
sometimes we need to pass HTML nodes to other components, and passing it via props is not good. we shall better pass it children.
When we do that, we must import reactNode in the receiving component and recieve it as such.
creat Alert.tsx, then add bootstrop alert, make the alert dynamic by expecting a text property
if we are expecting some simple text string, we can rename the text prop to children and pass the text as child node as well.
however, this would not work if the child is not a simple text but some HTML content instead. So, change the proptype to ReactNode instead of string.
summary:
text: String, if we are passing simple text through props
children: string, if we are passing simple string as child
children: ReactNode, if we are passing HTML as child


## Inspecting Components with React Dev Tools
Install extension: React Developer Tools
the components tab shows the component heirarrchy, props etc
it also has some other useful features.

## Exercise: Building a Button Component
button component

props interfac:
button text as child string/ReactNode
optional color property which shall only expects the values allowed by Bootstrap
onClick handler to console log

## Exercise: showing an alert

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
