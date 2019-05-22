import React from 'react'
import { Form } from 'antd'
import Input from './input'

export default function ({ props, onEvent }) {
  const {
    type = 'text',
    key,
    label,
    onChange,
    ...rest
  } = props

  let c = null

  if (type === 'text' && rest.value) {
    c = (
      <span>{rest.value}</span>
    )
  }

  if (type === 'input') {
    c = (
      <Input {...rest} onChange={v => onEvent(onChange, key, v)} />
    )
  }

  if (!c) {
    return null
  }

  return (
    <Form
      style={{ width: '100%' }}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item
        label={label}
        validateStatus="error"
        help="The information is being validated..."
      >
        {c}
      </Form.Item>
    </Form>
  )
}
