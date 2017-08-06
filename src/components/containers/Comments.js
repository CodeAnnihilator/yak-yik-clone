import React, { Component } from 'react'
import { CreateComment, Comment } from '../presentation'
import { APIManager } from '../../utils'

import styles from './styles'

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    APIManager.get('/api/comment', null, (err, response) => {
      if (err) return alert('ERROR:' + err.message)
      this.setState({ list: response.results })
    })
  }

  submitComment = comment => {
    APIManager.post('/api/comment', comment, (err, response) => {
      if (err) return alert('ERROR:' + err.message)
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)
      this.setState({ list: updatedList })
    })
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
          <CreateComment onCreate={this.submitComment}/>
        </div>
      </div>
    )
  }
}
