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
        isCompleted: React.PropTypes.bool.isRequired,
        isEdited: React.PropTypes.bool.isRequired,
        onComplete: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired,
        onEdit: React.PropTypes.func.isRequired,
        onDisableEditTodo: React.PropTypes.func.isRequired
    },
    render: function() {
        return ((editMode) => {
            return (
                <div>
                    <button onClick={this.props.onComplete}>Complete</button>
                    {editMode}
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>
            );
        })(ui['editMode'+this.props.isEdited].call(this));

    }
});
