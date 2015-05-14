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
        todos: React.PropTypes.array,
        context: React.PropTypes.any,
        onEditTodo: React.PropTypes.func,
        onDeleteTodo: React.PropTypes.func,
        onCompleteTodo: React.PropTypes.func,
        onDisableEditTodo: React.PropTypes.func
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
