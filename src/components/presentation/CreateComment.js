import React, { Component } from 'react'

const initialState = {
  comment: {
    username: '',
    body: ''
  }
}

export default class CreateComment extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  resetState = () => this.setState(initialState)

  updateComment = e => {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment[e.target.id] = e.target.value
    this.setState({ comment: updatedComment })
  }

  submitComment = () => {
    this.props.onCreate(this.state.comment)
    this.resetState()
  }

  render() {
    const { username, body } = this.state.comment
    return (
      <div>
        <h3>Craete Comment</h3>
        <input onChange={this.updateComment} className='form-control' id='username' type='text' value={username} placeholder='Username' /><br />
        <input onChange={this.updateComment} className='form-control' id='body' type='text' value={body} placeholder='Comment' /><br />
        <button onClick={this.submitComment} className='btn btn-info'>Submit Comment</button>
      </div>
    )
  }
}
