import './App.css';
// import Posts from './components/Posts';
// import PostForm from './components/PostForm';
// import {Provider} from 'react-redux'
import React from 'react';
import {sendAction} from './action/index.js'; // 动作触发action
import {store} from './store.js/index.js'

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.handlerClick=this.handlerClick.bind(this);
  }
  handlerClick() {
    const actionVal=sendAction();
    store.dispatch(actionVal); // dispatch 触发动作aciton
  }
  componentDidMount() {
    // store.subscribe相当于监听函数 监听store的变化
    store.subscribe(()=>{
      console.log('store',store.getState())
    })

  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handlerClick}>点我点我</button>
        {/* <PostForm></PostForm>
        <Posts></Posts> */}
      </div>
    );
  }

}

export default App;
