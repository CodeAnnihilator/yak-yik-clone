import React, { Component } from 'react'
import styles from './styles'

export default class Zone extends Component {
  render() {
    const style = styles.zone
    const { currentZone } = this.props
    return (
      <div style={style.container}>
        <h2 style={style.header}>
          <a style={style.title} href='#'>{ currentZone.name }</a>
        </h2>
        <span className='detail'>{ currentZone.zipCodes[0] }</span><br />
        <span className='detail'>{ currentZone.numComments } comments</span>
      </div>
    )
  }
}
