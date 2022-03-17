import { Component } from 'react';
import classes from './Header'
class  Header extends Component{

  constructor(props) {
    super(props);

  }

render() {
  let myclass=[];
  if(this.props.persons.length<=2) {
    myclass.push(classes.red)
  }
  if(this.props.persons.length<=1) {
    myclass.push(classes.bold)
  }
  return (
    <div>
      <h2 className={myclass}>This is my first projection</h2>
      <button onClick={this.props.toggleHander}>请点击我</button>
    </div>
  )
}

}
export default Header;