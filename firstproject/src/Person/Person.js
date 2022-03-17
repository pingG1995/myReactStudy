import React,{Component}  from "react";
import './Person.css'
class person extends Component{
constructor(props) {
  super(props);
  console.log("[person.js] constructor is running")
}
componentDidMount() {
  console.log("[person.js] componentDidMount is running")
}
componentWillReceiveProps() {
  console.log("[person.js] componentWillReceiveProps is running")
}
shouldComponentUpdate(nextProps,nextState) {
  // 当发生改变时 return true则继续渲染 再执行render函数
  console.log("[person.js] shouldComponentUpdate is running")
  return this.props.children===nextProps.children
}
  render() {
    console.log("[person.js] render is running")
    const style={
      color:'gray'
    }
    return(
      <div className="Person">
        <p onClick={this.props.myClick}>大家好！我是{this.props.name || 'nobody'}，这是我的第{this.props.count || 0}个项目</p>
        <h3 style={style}>{this.props.children}</h3>
        <input type="text" onChange={this.props.textChange?this.props.textChange:()=>{}} value={this.props.name}></input>
      </div>
    )
  }
}
export default person;