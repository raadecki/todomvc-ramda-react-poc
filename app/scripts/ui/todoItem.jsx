import React from 'react';
import RA from 'react/addons';

var ui = {};

ui.editModefalse = function() {
    return (
        <span onClick={this.props.onDisableEditTodo} onDoubleClick={this.props.onEdit}>{this.props.name}</span>
    );
};
ui.editModetrue = function() {
    return (
        <span><input type="text" ref="editTodo" defaultValue={this.props.name} onKeyDown={this.props.onEdit}/></span>
    );
};

export default React.createClass({
    displayName: 'TodoItem',
    mixins: [RA.addons.PureRenderMixin],
    propTypes: {
        name: React.PropTypes.string.isRequired,
        isCompleted: React.PropTypes.bool,
        isEdited: React.PropTypes.bool,
        onComplete: React.PropTypes.func,
        onDelete: React.PropTypes.func,
        onEdit: React.PropTypes.func,
        onDisableEditTodo: React.PropTypes.func
    },
    render: function() {
        var editMode = ui['editMode'+this.props.isEdited].call(this);

        return (
            <div>
                <button onClick={this.props.onComplete}>Complete</button>
                {editMode}
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        );
    }
});
