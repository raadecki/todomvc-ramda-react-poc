import R from 'ramda';
import React from 'react';

import {
    addTodo,
    deleteTodo,
    toggleTodoComplete,
    toggleTodoEdit,
    updateTodoName,
    activeTodos,
    completedTodos,
    disableEditInAllTodos
} from 'logic/todo';

var dataLens = R.lensProp('props');

export var todosLens = R.pipeL(
    dataLens,
    R.lensProp('todos')
);

export var storedTodosLens = R.pipeL(
    dataLens,
    R.lensProp('storedTodos')
);

var refsLens = R.lensProp('refs');

var headerLens = R.pipeL(
    refsLens,
    R.lensProp('header')
);
var newTodoLens = R.pipeL(
    refsLens,
    R.lensProp('newTodo')
);

var newTodoInputLens = R.pipeL(
    headerLens,
    newTodoLens
);

var listLens = R.pipeL(
    refsLens,
    R.lensProp('list')
);

var editTodoLens = R.pipeL(
    refsLens,
    R.lensProp('editTodo')
);
var editTodoInputLens = (obj, idx) => R.pipeL(
    listLens,
    refsLens,
    R.lensProp('item'+idx),
    editTodoLens
)(obj);

//now it will be easy to switch between props and state
function applyToReact(props) {
    return this.setProps(props);
}

//condition handlers namespace
var ch = {};

ch.getFn = function getFn(k, fnPrefix) {
    return R.either(ch[fnPrefix+k], R.T);
};

ch.addTodo13 = function addTodo13() {
    ((todos) => {
        applyToReact.call(this, {
            todos: todos,
            storedTodos: R.pipe(
                R.concat(storedTodosLens(this)),
                R.uniq
            )(todos)
        });
    })(addTodo(
        React.findDOMNode(newTodoInputLens(this)).value.trim(),
        todosLens(this)
    ));
};

ch.editTodo13 = function editTodo13(idx) {
    ((todos) => {
        applyToReact.call(this, {
            todos: todos,
            storedTodos: todos
        });
    })(R.pipe(
        updateTodoName(
            idx,
            React.findDOMNode(editTodoInputLens(this, idx)).value.trim()
        ),
        toggleTodoEdit(idx)
    )(todosLens(this)));
};

ch.editTodoundefined = function editTodo13(idx, e) {
    e.stopPropagation();
    applyToReact.call(this, {
        todos: toggleTodoEdit(idx,todosLens(this))
    });
};

ch.disableEditHandlerInputfalse = function disableEditHandlerInputfalse() {
    ((todos) => {
        applyToReact.call(this, {
            todos: todos,
            storedTodos: todos
        });
    })(disableEditInAllTodos(storedTodosLens(this)));

};

export function addTodoHandler(e) {
    ch.getFn(e.which, 'addTodo').call(this, e);
}

export function editTodoHandler(idx, e) {
    ch.getFn(e.which, 'editTodo').call(this, idx, e);
}

export function deleteTodoHandler(idx) {
    ((todos) => {
        applyToReact.call(this, {
            todos: todos,
            storedTodos: todos
        });
    })(deleteTodo(idx, todosLens(this)));
}

export function completeTodoHandler(idx) {
    ((todos) => {
        applyToReact.call(this, {
            todos: todos,
            storedTodos: todos
        });
    })(toggleTodoComplete(idx, todosLens(this)));
}

export function showAllTodosHandler() {
    applyToReact.call(this, {
        todos: storedTodosLens(this)
    });
}

export function showActiveTodosHandler() {
    applyToReact.call(this, {
        todos: activeTodos(storedTodosLens(this))
    });
}

export function showCompletedTodosHandler() {
    applyToReact.call(this, {
        todos: completedTodos(storedTodosLens(this))
    });
}

export function showCompletedTodosHandler() {
    applyToReact.call(this, {
        todos: completedTodos(storedTodosLens(this))
    });
}

export function disableEditHandler(e) {
    ch.getFn('input' === e.target.localName, 'disableEditHandlerInput').call(this);
}

export function clearCompletedHandler() {
    ((todos) => {
        applyToReact.call(this, {
            todos: todos,
            storedTodos: todos
        });
    })(activeTodos(storedTodosLens(this)));
}
