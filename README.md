# LAB - 31 and 32

## Hooks

### Author: Liz Kavalski

### Links and Resources
[![Build Status](https://travis-ci.com/lizkavalski/lab-32-hooks.svg?branch=master)](https://travis-ci.com/lizkavalski/lab-32-hooks)
- [submission PR](https://github.com/lizkavalski/lab-32-hooks/pull/3)
- [heruko](https://api-401n13.herokuapp.com/api/v1/todo)-class sever
- [front-end](https://5d8997e4807961ca6d7212d7--lab-32-hooks.netlify.com/)

### Modules

#### `todo.js`

Is a function that reviced infomation(items that needs to be done) from the 'form' and save the infomation to the sever.

#### `todo-list.js`

Is a function the retrives infomation from the sever and renders onto the page.

#### `shopping.js`

Is a function that reviced infomation(items for a shopping list) from the 'form' and save the infomation to the sever.

#### `forms.js`

A hook that handles changes to the page.

### Setup

#### `.env` requirements
- `REACT_APP_Q_SERVER`= URL connection to the socket.io server.
- `REACT_APP_API`= URL connection to the server database.
- 

#### Running the app

- `npm start`
- Endpoint: `/todo`

  - Returns a JSON object with items saved to the sever in it.

#### Tests

- Run `npm test`
- It just make sure it dose not crash when it runs
- The assertions I need to make is to connect the server and socket.io to the ones I builted(not the class) and then make sure the page render when something has been submiting

#### UML

Link to an image of the UML for your application and response to events
