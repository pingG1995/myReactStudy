import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state={
  age:22,
  name:'zou'
}
switchName=(newname)=>{
  this.setState({name:newname})
  // this.state.name="zouping"
  alert(this.state.name)
}
  render() {
    return (
        <div className="App">
          <h2>This is my first projection</h2>
          <button onClick={this.switchName.bind(this,'邹萍')}>请点击我</button>
          <Person count="20" name={this.state.name} myClick={this.switchName.bind(this,'clickName')} ></Person>
          <Person></Person>
          <Person>非常开心可以学习到新知识{this.state.age}</Person>

        </div>
      );
  }
}

export default App;
