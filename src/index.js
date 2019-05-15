import React, { Component } from 'react'
import { Card } from '@fratercula/owl'
import forms from './component'

export default class extends Component {
  state = {
    data: this.props.defaultData,
  }

  update = (key, value) => {
    const { data } = this.state

    for (let i = 0; i < data.length; i += 1) {
      const items = data[i]
      const item = items.find(s => s.props.key === key)

      if (item) {
        item.props.value = value
        break
      }
    }

    this.setState({ data })
  }

  render() {
    const { data } = this.state

    return (
      <Card
        components={{ forms }}
        data={data}
        onEvent={(t, dispatch) => {
          dispatch.call(this, '666')
        }}
      />
    )
  }
}
