import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as TodoActions from "../actions/TodoActions";


export default class Title extends Component {


constructor() {

        super();
        this.state={
          value:''
        }
        this.submit = this.submit.bind(this);
    }

  reloadTodos() {
      TodoActions.reloadTodos();
  }

 


  submit(e){
    e.preventDefault();
    let text = e.target.txt.value;
    TodoActions.createTodo(text)
    e.target.txt.value = '';
  }

  

  render() {

    return (
      <div >
        <h4 style={{marginLeft: 100, color: 'Green', fontSize: 22}}>
          Flux App
        </h4>
       
        <form onSubmit={this.submit}>
           <input
              type="text"
              name="txt"
              onChange = {(e)=>this.setState({value:e.target.value})}
              placeholder="Type to add new tasks"
            />
             <input type="submit" style={{marginLeft: 10, marginRight: 5}}
              value="addUser"/>
        </form> 
         <button onClick={this.reloadTodos} >Reload </button> 
       
      </div>
    );
  }

}


