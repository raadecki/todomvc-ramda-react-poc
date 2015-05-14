import React from 'react';

var ui = {};

ui.clearCompletedtrue = function() {
    return (
        <button onClick={this.props.onClearCompleted}>Clear completed</button>
    );
};

ui.clearCompletedfalse = () => '';

ui.showFootertrue = function() {
    var clearCompleted = ui['clearCompleted'+this.props.hasCompleted].call(this);

    return (
        <div>
            <span>{this.props.activeTodosCount} items left</span>
            <button onClick={this.props.onShowAll}>All</button>
            <button onClick={this.props.onShowActive}>Active</button>
            <button onClick={this.props.onShowCompleted}>Completed</button>
            {clearCompleted}
        </div>
    );
};

ui.showFooterfalse = function() {
    return (<div></div>);
};

export default React.createClass({
    displayName: 'TodoFooter',
    propTypes: {
        activeTodosCount: React.PropTypes.number,
        hasTodos: React.PropTypes.bool,
        hasCompleted: React.PropTypes.bool,
        onShowAll: React.PropTypes.func,
        onShowActive: React.PropTypes.func,
        onShowCompleted: React.PropTypes.func,
        onClearCompleted: React.PropTypes.func
    },
    render: function() {
        var footer = ui['showFooter'+this.props.hasTodos].call(this);

        return (
            <div>{footer}</div>
        );
    }
});
