import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import superagent from 'superagent'

import styles from './styles'

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      comment: {
        username: '',
        body: '',
        timestamp: ''
      }
    }
  }

  componentDidMount() {
    superagent
      .get('/api/comment')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) return alert('ERROR:' + err)
        let results = response.body.results
        this.setState({ list: results })
      })
  }

  submitComment = () => {
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)
    this.setState({ list: updatedList })
  }

  updateUsername = e => {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = e.target.value
    this.setState({ comment: updatedComment })
  }

  updateBody = e => {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = e.target.value
    this.setState({ comment: updatedComment })
  }

  updateTimestamp = e => {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = e.target.value
    this.setState({ comment: updatedComment })
  }

  render() {
    return (
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comment.commentBox}>
          <ul style={styles.comment.commentList}>
            {
              this.state.list.map((comment, index) =>
                <li key={index}><Comment currentComment={comment} /></li>
              )
            }
          </ul>
          <input className='form-control' type='text' placeholder='Username' onChange={this.updateUsername}/><br />
          <input className='form-control' type='text' placeholder='Comment' onChange={this.updateBody}/><br />
          <input className='form-control' type='text' placeholder='Timestamp' onChange={this.updateTimestamp}/><br />
          <button className='btn btn-info' onClick={this.submitComment}>Submit Comment</button>
        </div>
      </div>
    )
  }
}
