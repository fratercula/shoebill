import React from 'react'
import { Form } from 'antd'
import * as component from './component'

export default function ({ props, onEvent }) {
  const {
    type,
    key,
    label,
    onChange,
    labelCol,
    wrapperCol,
    labelAlign,
    error,
    verify,
    hidden = false,
    ...rest
  } = props

  let c = null

  if (type === 'Text' && key) {
    c = (
      <span>{rest.value}</span>
    )
  }

  const C = component[type]

  if (!C || hidden) {
    return null
  }

  c = (
    <C {...rest} onChange={v => onEvent(onChange, key, v)} />
  )

  return (
    <Form
      style={{ width: '100%' }}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      labelAlign={labelAlign}
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
