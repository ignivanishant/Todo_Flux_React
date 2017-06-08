import React, { Component } from 'react';
import '../App.css';

import TaskContainer from './views/TaskContainer';
import Title from './views/Title';



class App extends Component {

  render() {
    return (
      <div>
	      <Title/>
	      <TaskContainer/> 	
      </div>
    );
  }

}

export default App;
