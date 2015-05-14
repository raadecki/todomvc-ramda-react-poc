import R from 'ramda';

export var nameLens = R.lensProp('name');
export var completeLens = R.lensProp('complete');
export var editLens = R.lensProp('edit');

var propOnIndexLens = R.curry((propLens, idx) => {
    return R.pipeL(
       R.lensIndex(idx),
       propLens
    );
});

var indexCompleteLens = propOnIndexLens(completeLens);
var indexEditLens = propOnIndexLens(editLens);
var indexNameLens = propOnIndexLens(nameLens);

var createTodo = (name) => {
    return {
        name: name,
        complete: false,
        edit: false
    };
};

export var disableEditInAllTodos = R.map((todo) => {
    return editLens.set(false, todo);
});

export var addTodo = R.curry((name, todos) => {
    return R.pipe(
       createTodo,
       R.flip(R.append)(todos)
    )(name);
});

export var toggleTodoComplete = R.curry((idx, todos) => {
    var l = indexCompleteLens(idx);
    return l.set(!l(todos), todos);
});

export var updateTodoName = R.curry((idx, name, todos) => {
    return indexNameLens(idx).set(name, todos);
});

export var toggleTodoEdit = R.curry((idx, todos) => {
    var l = indexEditLens(idx);
    return R.pipe(
        disableEditInAllTodos,
        l.set(!l(todos))
    )(todos);
});

export var deleteTodo = R.pipe(
    R.flip(R.remove)(1),
    disableEditInAllTodos
);

export var activeTodos = R.pipe(
    disableEditInAllTodos,
    R.filter((todo) => {
        return !completeLens(todo);
    })
);

export var completedTodos = R.pipe(
    disableEditInAllTodos,
    R.filter((todo) => {
        return completeLens(todo);
    })
);
