import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

export default class Zones extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      zone: {
        name: '',
        zipCode: ''
      }
    }
  }

  componentDidMount() {
    superagent
      .get('/api/zone')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) return alert('ERROR:' + err)
        let results = response.body.results
        this.setState({ list: results })
      })
  }

  updateZone = e => {
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.id] = e.target.value
    this.setState({ zone: updatedZone })
  }

  addZone = e => {
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)
    this.setState({ list: updatedList })
  }

  render() {
    return (
      <div>
        <ol>
          {
            this.state.list.map((el, index) =>
              <li key={index}><Zone currentZone={el} /></li>
            )
          }
        </ol>
        <input id='name' onChange={this.updateZone} className='form-control' type='text' placeholder='Zone' /><br />
        <input id='zipCode' onChange={this.updateZone} className='form-control' type='text' placeholder='Zip Code' /><br />
        <button onClick={this.addZone} className='btn btn-danger'>Add Zone</button>
      </div>
    )
  }
}
