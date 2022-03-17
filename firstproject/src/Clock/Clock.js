import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  // 数据挂载到DOM之后
  componentDidMount() {
    this.timer = setInterval(()=>{
    },1000)
  };
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
export default Clock;