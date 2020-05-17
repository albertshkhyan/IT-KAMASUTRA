import React, { Component } from "react";

class StatusProfile extends Component {
  state = {
    editMode: false,
  };
  ////NOTE - We can  implement this, with toggle, that is with toggle (with one function -> !this.state.editMode)
  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    return (
      <div className="StatusProfile">
        <div className="statusCXontainer">
          {this.state.editMode ? (
            <div>
              <input
                autoFocus
                type="text"
                value={this.props.status}
                onBlur={this.deActivateEditMode}
              />
            </div>
          ) : (
            <div>
              <span onDoubleClick={this.activeEditMode}>
                {this.props.status}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default StatusProfile;
