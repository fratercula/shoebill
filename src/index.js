import React, { Component } from 'react'
import { Card } from '@fratercula/owl'
import forms from './component'

export default class extends Component {
  state = {
    data: [],
  }

  subscribes = []

  componentDidMount() {
    const { defaultData } = this.props
    const data = []

    defaultData.forEach((items, i) => {
      data[i] = []
      items.forEach((item, j) => {
        const { type, props = {} } = item
        data[i][j] = { type, props: {} }

        const { onChange, subscribe, ...rest } = props

        if (typeof subscribe === 'function') {
          this.subscribes.push(subscribe)
        }

        if (typeof onChange === 'function') {
          data[i][j].props.onChange = onChange
        }

        Object.keys(rest).forEach((key) => {
          data[i][j].props[key] = rest[key]
        })
      })
    })

    this.setState({ data })
  }

  dispatch = (key, value) => {
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
        onEvent={(t, onChange, key, value) => {
          this.dispatch(key, value)
          if (typeof onChange === 'function') {
            onChange.call(this, key, value)
          }
          this.subscribes.forEach((subscribe) => {
            subscribe.call(this, key, value)
          })
        }}
      />
    )
  }
}
