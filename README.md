# TodoMVC PoC using RamdaJS and ReactJS

Playground for separate app logic written functional way and stateless react components

## Installation
See Installation section [here](https://github.com/raadecki/tiny-es6-seed)

## Stack
* [ramdajs](http://ramdajs.com)
* [reactjs](http://https://facebook.github.io/react/)
* [tiny-es6-seed](https://github.com/raadecki/tiny-es6-seed)

## Key PoC components and features:
* `scripts/logic/todo.js` - app logic, written functional way using awesome ramdajs@0.14.0
* `scripts/handlers/app.js` - all event handlers used in app.jsx
* `scripts/ui` - stateless react components
* `scripts/app.jsx` - react app component and starting point. It has references to all handlers and pass them to child components
* `test/logic/todo` - unit tests for `logic/todo` functions
* data immutability

## TODO
* add TodoMVC CSS styles
* solve editing todo from Active, Complete view issue
