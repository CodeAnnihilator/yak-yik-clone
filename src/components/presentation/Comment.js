import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    const {
      currentComment
    } = this.props
    return (
      <div>
        <p style={{ fontSize: 20, fontWeight: 400 }}>{ currentComment.body }</p>
        <span style={{ fontWeight: 200 }}>{ currentComment.username }</span>
        <span style={{ fontWeight: 200, marginLeft: 12, marginRight: 12 }}>|</span>
        <span style={{ fontWeight: 200 }}>{ currentComment.timestamp }</span>
        <hr />
      </div>
    )
  }
}
