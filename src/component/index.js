import React from 'react'
import { Form } from 'antd'
import Input from './input'

export default function ({ props, onEvent }) {
  const {
    type = 'text',
    key,
    label,
    onChange,
    labelCol,
    wrapperCol,
    error,
    verify,
    ...rest
  } = props

  let c = null

  if (type === 'text' && key) {
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
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      <Form.Item
        required={!!verify}
        label={label}
        validateStatus={error ? 'error' : null}
        help={error}
      >
        {c}
      </Form.Item>
    </Form>
  )
}
