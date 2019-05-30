import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { Card } from '@fratercula/owl'
import forms from './component'

export default class extends Component {
  static propTypes = {
    defaultData: PropTypes.array,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
  }

  static defaultProps = {
    defaultData: [],
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  }

  state = {
    data: [],
  }

  subscribes = []

  componentDidMount() {
    const { defaultData, labelCol, wrapperCol } = this.props
    const data = []

    defaultData.forEach((items, i) => {
      data[i] = []
      items.forEach((item, j) => {
        data[i][j] = { type: 'forms', props: {} }
        const { onChange, subscribe, ...rest } = item

        if (typeof subscribe === 'function') {
          this.subscribes.push(subscribe)
        }

        if (typeof onChange === 'function') {
          data[i][j].props.onChange = onChange
        }

        Object.keys(rest).forEach((key) => {
          data[i][j].props[key] = rest[key]
        })

        data[i][j].props.labelCol = data[i][j].props.labelCol || labelCol
        data[i][j].props.wrapperCol = data[i][j].props.wrapperCol || wrapperCol
      })
    })

    this.setState({ data })
  }

  update = (key, status) => {
    const { data } = this.state

    for (let i = 0; i < data.length; i += 1) {
      const items = data[i]
      const item = items.find(s => s.props.key === key)

      if (item) {
        item.props = { ...item.props, ...status }
        break
      }
    }

    this.setState({ data })
  }

  setError = (key, error) => {
    this.update(key, { error })
  }

  removeError = (key) => {
    this.update(key, { error: undefined })
  }

  onEvent = (t, onChange, key, value) => {
    this.update(key, { value, error: '' })
    if (typeof onChange === 'function') {
      onChange.call(this, value)
    }
    this.subscribes.forEach((subscribe) => {
      subscribe.call(this, key, value)
    })
  }

  onSubmit = async () => {
    const { data } = this.state
    const items = data
      .reduce((c, p) => c.concat(p), [])
      .map(({ props }) => ({ ...props }))
      .filter(({ key }) => key !== undefined)

    for (let i = 0; i < items.length; i += 1) {
      const { value, verify, key } = items[i]
      if (!verify) {
        continue
      }
      if (!(await verify.validator(value))) {
        this.setError(key, verify.message)
        return
      }
    }
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <Card
          cellMargin={[0, 20]}
          components={{ forms }}
          data={data}
          onEvent={this.onEvent}
        />
        <div>
          <Button onClick={this.onSubmit}>提交</Button>
        </div>
      </div>
    )
  }
}
