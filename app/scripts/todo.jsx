import React from 'react';
import TodoHeader from 'ui/todoHeader.jsx!';
import TodoList from 'ui/todoList.jsx!';
import TodoFooter from 'ui/todoFooter.jsx!';

import {
    editTodoHandler,
    addTodoHandler,
    deleteTodoHandler,
    completeTodoHandler,
    showAllTodosHandler,
    showActiveTodosHandler,
    showCompletedTodosHandler,
    disableEditHandler,
    clearCompletedHandler,
    todosLens,
    activeStoredTodos,
    completedStoredTodos
} from 'handlers/todo';

var TodoMVC = React.createClass({
    displayName: 'TodoMVC',
    propTypes: {
        todos: React.PropTypes.array,
        storedTodos: React.PropTypes.array
    },
    getDefaultProps: function() {
        return {
            todos: [],
            storedTodos: []
        };
    },
    onDisableEditTodo: disableEditHandler,
    onAddTodo: addTodoHandler,
    onEditTodo: editTodoHandler,
    onDeleteTodo: deleteTodoHandler,
    onCompleteTodo: completeTodoHandler,
    onShowAll: showAllTodosHandler,
    onShowActive: showActiveTodosHandler,
    onShowCompleted: showCompletedTodosHandler,
    onClearCompleted: clearCompletedHandler,
    render: function() {
        return (
            <div>
                <TodoHeader
                    ref="header"
                    onAddTodo={this.onAddTodo}
                />
                <TodoList
                    ref="list"
                    context={this}
                    todos={todosLens(this)}
                    onDisableEditTodo={this.onDisableEditTodo}
                    onEditTodo={this.onEditTodo}
                    onDeleteTodo={this.onDeleteTodo}
                    onCompleteTodo={this.onCompleteTodo}
                />
                <TodoFooter
                    hasTodos={todosLens(this).length > 0}
                    activeTodosCount={activeStoredTodos(this).length}
                    hasCompleted={completedStoredTodos(this).length > 0}
                    onShowAll={this.onShowAll}
                    onShowActive={this.onShowActive}
                    onShowCompleted={this.onShowCompleted}
                    onClearCompleted={this.onClearCompleted}
                />
            </div>
        );
    }
});


export default function app(document) {

    React.render(
      <TodoMVC />,
      document.getElementById('app')
    );

}
