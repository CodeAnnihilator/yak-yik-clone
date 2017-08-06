import React, { Component } from 'react'

const initialState = {
  zone: {
    name: '',
    zipCode: ''
  }
}


export default class CreateZone extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  resetState = () => this.setState(initialState)

  updateZone = e => {
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.id] = e.target.value
    this.setState({ zone: updatedZone })
  }

  submitZone = () => {
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['zipCodes'] = updatedZone.zipCode.split(',')
    this.props.onCreate(updatedZone)
    this.resetState()
  }

  render() {
    const { name, zipCode } = this.state.zone
    return (
      <div>
        <input onChange={this.updateZone} value={name} id='name' className='form-control' type='text' placeholder='Zone' /><br />
        <input onChange={this.updateZone} value={zipCode} id='zipCode' className='form-control' type='text' placeholder='Zip Code' /><br />
        <button onClick={this.submitZone} className='btn btn-danger'>Add Zone</button>
      </div>
    )
  }
}
