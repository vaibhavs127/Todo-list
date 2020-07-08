import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.todo.completed ? "#7bd173" : "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #000 solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };



  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}


//delete button
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;