import React  from "react";

const person= (props) =>{
  return(
    <div>
      <p onClick={props.myClick}>大家好！我是{props.name || 'nobody'}这是我的第{props.count || 0}个项目</p>
      <h3>{props.children}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red" />
</svg>
    </div>
  )
}
export default person;