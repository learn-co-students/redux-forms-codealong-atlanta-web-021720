import React, { Component } from 'react'
import {connect} from 'react-redux'
class CreateTodo extends Component {
  state ={
    // type: 'ADD_TODO',
    // todo: ''
    text: ''
  }
  
  onSubmitHandler =(event)=>
  {
    event.preventDefault()
    // this.setState({todo: event.target.value});
    console.log(event)
    this.props.addText(this.state.text)
  }

  onChangeTextHandler =(event)=>
  {
    event.preventDefault()
    // debugger
    this.setState({text: event.target.value});
  }

  render() {
    return(
      <div>
        {/* Create Todo Component */}
        <form  onSubmit={this.onSubmitHandler}>
          <p>
          <label htmlFor="">Todo:</label>
          <input type="text" name='todo' onChange={this.onChangeTextHandler}/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps =(dispatch)=>
{
  return {
    addText: (text)=>dispatch({type: 'ADD_TEXT', payload: text})
  }
}

export default connect(null,mapDispatchToProps)(CreateTodo);
