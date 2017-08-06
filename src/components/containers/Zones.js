import React, { Component } from 'react'
import { CreateZone, Zone } from '../presentation'
import { APIManager } from '../../utils'

export default class Zones extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      selected: 0
    }
  }

  componentDidMount() {
    APIManager.get('/api/zone', null, (err, response) => {
      if (err) return alert('ERROR:' + err.message)
      this.setState({ list: response.results })
    })
  }

  addZone = zone => {
    APIManager.post('/api/zone', zone, (err, response) => {
      if (err) return alert('ERROR:' + err.message)
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)
      this.setState({ list: updatedList })
    })
  }

  selectZone = index => {
    this.setState({ selected: index })
  }

  render() {
    return (
      <div>
        <ol>
          {
            this.state.list.map((el, index) =>
              <li key={index}>
                <Zone
                  index={index}
                  currentZone={el}
                  isSelected={index == this.state.selected}
                  onSelect={this.selectZone}
                />
              </li>
            )
          }
        </ol>
        <CreateZone onCreate={this.addZone}/>
      </div>
    )
  }
}
