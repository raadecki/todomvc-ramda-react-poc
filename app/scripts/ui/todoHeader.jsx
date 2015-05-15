import React from 'react';

export default React.createClass({
    displayName: 'TodoHeader',
    propTypes: {
        onAddTodo: React.PropTypes.func.isRequired
    },
    render: function() {
        return (
            <div>
                <p>Todo List</p>
                <input ref="newTodo" onKeyDown={this.props.onAddTodo} />
            </div>
        );
    }
});
