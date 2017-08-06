import React, { Component } from 'react'
import styles from './styles'

export default class Zone extends Component {

  onSelectTitle = e => {
    e.preventDefault()
    const { onSelect, index } = this.props
    onSelect(index)
  }

  render() {
    const style = styles.zone
    const { currentZone, isSelected } = this.props
    return (
      <div style={style.container}>
        <h2 onClick={this.onSelectTitle} style={style.header}>
          <a style={ isSelected ? style.title : {}} href='#'>{ currentZone.name }</a>
        </h2>
        <span className='detail'>{ currentZone.zipCodes[0] }</span><br />
        <span className='detail'>{ currentZone.numComments } comments</span>
      </div>
    )
  }
}
