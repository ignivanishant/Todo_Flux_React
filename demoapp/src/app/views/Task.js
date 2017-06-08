import React, { Component } from 'react';

import * as TodoActions from "../actions/TodoActions";


export default class Task extends Component {

  toggleTodo(id) {
      TodoActions.toggleTodo(id);
  }

  removeTodo(id) {
      TodoActions.removeTodo(id);
  }

  render() {

    const { id, text} = this.props;
          //checkbox = complete ? 'checkbox-multiple-marked-circle-outline' : 'checkbox-multiple-blank-circle-outline';

    return (
      <tr  key={id}>
        <td>{text}</td>
          <td><button style ={{color: 'blue'}}
            onClick={this.removeTodo.bind(this, id)} 
          >delete</button></td>
      </tr>
    );

  }

}

