import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      name: "",
      status: "Pending",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    const { name, status } = this.state;
    if (name === "") {
      alert("You must fill work's name");
      e.preventDefault();
    } else {
      if (this.state._id !== "") {
        e.preventDefault();
        const _id = this.state._id
        this.props.editWork({ _id, name, status });
        this.resetValue(e);
      } else {
        e.preventDefault();
        this.props.AddNewWork({ name, status });
        this.resetValue(e);
      }
    }
  };

  resetValue = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      status: "Pending",
    });
  };

  componentWillMount() {
    console.log(this.props.valueEditting);
    if (this.props.valueEditting) {
      this.setState({
        _id: this.props.valueEditting._id,
        name: this.props.valueEditting.name,
        status: this.props.valueEditting.status,
      });
    }
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.state._id === "" ? "Add New Work" : "Edit Work"}
            <span
              className="fa fa-times-circle"
              style={{ float: "right" }}
              onClick={this.props.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Work's Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <label style={{ marginTop: 10 }}>Status:</label>
              <select
                className="form-control form-control-lg"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
              >
                <option>Pending</option>
                <option>Doing</option>
                <option>Done</option>
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-success">
                {" "}
                <i className="fas fa-plus"></i>{" "}
                {this.state.id === "" ? "Add" : "Save"}
              </button>{" "}
              &nbsp;
              <button className="btn btn-danger" onClick={this.resetValue}>
                <i className="fas fa-trash-restore"></i> Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddForm;
