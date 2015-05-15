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
        activeTodosCount: React.PropTypes.number.isRequired,
        hasTodos: React.PropTypes.bool.isRequired,
        hasCompleted: React.PropTypes.bool.isRequired,
        onShowAll: React.PropTypes.func.isRequired,
        onShowActive: React.PropTypes.func.isRequired,
        onShowCompleted: React.PropTypes.func.isRequired,
        onClearCompleted: React.PropTypes.func.isRequired
    },
    render: function() {
        return ((footer) => {
            return (
                <div>{footer}</div>
            );
        })(ui['showFooter'+this.props.hasTodos].call(this));

    }
});
