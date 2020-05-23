import React, { Component } from "react";

class StatusProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status,
    };
  }
  ////NOTE - We can  implement this, with toggle, that is with toggle (with one function -> !this.state.editMode)
  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
    
  };
  deActivateEditMode = (event) => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(event.target.value);
  };
  onStatusChangge = (event) => {
    this.setState({
      status: event.target.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {

    return (
      <div className="StatusProfile">
        <div className="statusCXontainer">
          {this.state.editMode ? (
            <div>
              <input
                autoFocus
                type="text"
                value={this.state.status}
                onBlur={this.deActivateEditMode}
                onChange={this.onStatusChangge}
              />
            </div>
          ) : (
            <div>
              <span onDoubleClick={this.activeEditMode}>
                {this.props.status || "no status"}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default StatusProfile;
