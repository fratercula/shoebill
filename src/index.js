import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { Card } from '@fratercula/owl'
import form from './form'

export default class extends Component {
  static propTypes = {
    defaultData: PropTypes.array,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    labelAlign: PropTypes.string,
  }

  static defaultProps = {
    defaultData: [],
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    labelAlign: 'right',
  }

  state = {
    data: [],
  }

  subscribes = []

  componentDidMount() {
    this.reset()
  }

  serialize = (origin) => {
    const { labelCol, wrapperCol, labelAlign } = this.props
    const data = []

    origin.forEach((items, i) => {
      data[i] = []
      items.forEach((item, j) => {
        data[i][j] = { type: 'form', props: {} }
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
        data[i][j].props.labelAlign = data[i][j].props.labelAlign || labelAlign
      })
    })

    return data
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

  submit = async () => {
    const { data } = this.state
    const items = data
      .reduce((c, p) => c.concat(p), [])
      .map(({ props }) => ({ ...props }))
      .filter(({ key, hidden }) => key !== undefined && hidden !== true)

    for (let i = 0; i < items.length; i += 1) {
      const {
        value,
        verify,
        key,
        error,
      } = items[i]

      if (!verify) {
        continue
      }
      if (!(await verify.validator(value))) {
        this.setError(key, verify.message)
        return
      }
      if (error) {
        return
      }
    }

    const result = items.map((item) => {
      const current = {
        key: item.key,
        label: item.label,
        value: item.value,
      }
      if (item.options) {
        current.options = item.options
      }
      return current
    })

    console.log(result)
  }

  reset = () => {
    const { defaultData } = this.props
    this.setState({ data: this.serialize(defaultData) })
  }

  render() {
    const { data } = this.state
    const {
      defaultData,
      wrapperCol,
      labelCol,
      ...rest
    } = this.props

    return (
      <div {...rest}>
        <Card
          cellMargin={[0, 20]}
          components={{ form }}
          data={data}
          onEvent={this.onEvent}
        />
        <div>
          <Button onClick={this.submit}>提交</Button>
          <Button onClick={this.reset}>重置</Button>
        </div>
      </div>
    )
  }
}
