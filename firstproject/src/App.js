import { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Header from './components/Header/Header.js';
// import Clock from './Clock/Clock'

class App extends Component {

constructor(props) {
  super(props);
  console.log("[App.js] constructor is running")
  this.state={
    age:22,
    name:'zou',
    date:new Date(),
    showToggle:true,
    persons:[
      {id:'33',count:22,name:'zouping1'},
      {id:'222',count:24,name:'zouping2'},
      {id:'44',count:25,name:'zouping5'},
    ]
  }
}


switchName=(newname)=>{
  this.setState({name:newname})
  alert(this.state.name)
}
// 文本发生改变时改变state的name数据
textChange=(event,id)=>{
  let newPerson=this.state.persons;
  const targetIndex=newPerson.findIndex(item=>item.id===id)
  newPerson.splice(targetIndex,1,{
    ...newPerson[targetIndex],
    name:event.target.value
  })
  this.setState({
    persons:newPerson
  })
}

toggleHander=() =>{
  this.setState({
    showToggle:!this.state.showToggle
  })
}

deletePersonHandler=(index)=>{
  let newPerson=this.state.persons;
  newPerson.splice(index,1);
  this.setState({
    persons:newPerson
  })
}
// componentWillMount不再推荐使用 可使用componentDidMount进行state的更新
// componentWillMount (){
//   console.log("[App.js] componentWillMount is running")
// }
componentDidMount() {
  console.log("[App.js] componentDidMount is running")
}
  render() {
    console.log("[App.js] render is running")
    let persons=null;
    if(this.state.showToggle) {
      persons=
      <div>
        {
          this.state.persons.map((person,index)=>{
            return <Person
              name={person.name}
              count={person.count}
              key={index}
              textChange={(event)=>{this.textChange(event,person.id)}}
              myClick={()=>{this.deletePersonHandler(index)}}>
              </Person>
          })
        }
      </div>
    }
    const classes=[];
    if(this.state.persons.length<=2) {
      classes.push("red")
    }
    if(this.state.persons.length<=1) {
      classes.push("bold")
    }


    return (
        <div className="App">
          <Header
            persons={this.state.persons}
            toggleHander={this.toggleHander}
          >
          </Header>
          {persons}
        </div>
      );
  }
}

export default App;
