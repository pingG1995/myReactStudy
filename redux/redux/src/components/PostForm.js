import React, { Component } from 'react'

 class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:'',
      body:''
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  /**
   * @description: input修改时
   * @param {*} target
   * @return {*}
   */
  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit(e) {
    // 防止表单的默认提交事件
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }


  render() {
    return (
      <div>
      <div>PostForm</div>
      <form onSubmit={this.onSubmit}>
          <div>
            <label>title</label>
            <br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <div>
            <label>body</label>
            <br />
            <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
          </div>
          <br />
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
};
export default PostForm;