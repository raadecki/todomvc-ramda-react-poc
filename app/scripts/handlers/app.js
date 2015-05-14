import R from 'ramda';

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

var propsLens = R.lensProp('props');

var todosLens = R.pipeL(
    propsLens,
    R.lensProp('todos')
);
export var storedTodosLens = R.pipeL(
    propsLens,
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

//condition handlers namespace
var ch = {};

ch.getFn = function getFn(k, fnPrefix) {
    return ch[fnPrefix+k] || R.T;
};

ch.addTodo13 = function addTodo13() {
    var todos = addTodo(
        newTodoInputLens(this).getDOMNode().value.trim(),
        todosLens(this)
    );
    this.setProps({
        todos: todos,
        storedTodos: R.pipe(
            R.concat(storedTodosLens(this)),
            R.uniq
        )(todos)
    });
};

ch.editTodo13 = function editTodo13(idx) {
    var todos = R.pipe(
        updateTodoName(
            idx,
            editTodoInputLens(this, idx).getDOMNode().value.trim()
        ),
        toggleTodoEdit(idx)
    )(todosLens(this));

    this.setProps({
        todos: todos,
        storedTodos: todos
    });
};

ch.editTodoundefined = function editTodo13(idx, e) {
    e.stopPropagation();
    this.setProps({
        todos: toggleTodoEdit(
            idx,
            todosLens(this)
        )
    });
};

ch.disableEditHandlerInputfalse = function disableEditHandlerInputfalse() {
    var todos = disableEditInAllTodos(storedTodosLens(this));
    this.setProps({
        todos: todos,
        storedTodos: todos
    });
};

export function addTodoHandler(e) {
    ch.getFn(e.which, 'addTodo').call(this, e);
}

export function editTodoHandler(idx, e) {
    ch.getFn(e.which, 'editTodo').call(this, idx, e);
}

export function deleteTodoHandler(idx) {
    var todos = deleteTodo(idx, todosLens(this));

    this.setProps({
        todos: todos,
        storedTodos: todos
    });
}

export function completeTodoHandler(idx) {
    var todos = toggleTodoComplete(idx, todosLens(this));

    this.setProps({
        todos: todos,
        storedTodos: todos
    });
}

export function showAllTodosHandler() {
    this.setProps({
        todos: storedTodosLens(this)
    });
}

export function showActiveTodosHandler() {
    this.setProps({
        todos: activeTodos(storedTodosLens(this))
    });
}

export function showCompletedTodosHandler() {
    this.setProps({
        todos: completedTodos(storedTodosLens(this))
    });
}

export function showCompletedTodosHandler() {
    this.setProps({
        todos: completedTodos(storedTodosLens(this))
    });
}

export function disableEditHandler(e) {
    ch.getFn('input' === e.target.localName, 'disableEditHandlerInput').call(this);
}

export function clearCompletedHandler() {
    var todos = activeTodos(storedTodosLens(this));
    this.setProps({
        todos: todos,
        storedTodos: todos
    });
}
