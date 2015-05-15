import React from 'react';
import TodoItem from 'ui/todoItem.jsx!';

import {
    nameLens,
    completeLens,
    editLens
} from 'logic/todo';

export default React.createClass({
    displayName: 'TodoList',
    propTypes: {
        todos: React.PropTypes.array.isRequired,
        context: React.PropTypes.any.isRequired,
        onEditTodo: React.PropTypes.func.isRequired,
        onDeleteTodo: React.PropTypes.func.isRequired,
        onCompleteTodo: React.PropTypes.func.isRequired,
        onDisableEditTodo: React.PropTypes.funcisRequired
    },
    render: function() {
        var items = this.props.todos.map((todo, idx) => {
            return (
                <TodoItem
                    ref={"item"+idx}
                    key={idx}
                    name={nameLens(todo)}
                    onDisableEditTodo={this.props.onDisableEditTodo}
                    isCompleted={completeLens(todo)}
                    isEdited={editLens(todo)}
                    onEdit={this.props.onEditTodo.bind(this.props.context, idx)}
                    onDelete={this.props.onDeleteTodo.bind(this.props.context, idx)}
                    onComplete={this.props.onCompleteTodo.bind(this.props.context, idx)}
                />
            );
        });

        return (
            <div>
                {items}
            </div>
        );
    }
});
