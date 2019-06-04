import React from 'react'
import { Form } from 'antd'
import PropTypes from 'prop-types'
import * as component from './component'

function F({ props: args, onEvent }) {
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
  } = args
  const { components } = this

  let c = null

  if (type === 'Text' && key) {
    c = (
      <span>{rest.value}</span>
    )
  }

  const C = component[type] || components[type]

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

F.propTypes = {
  props: PropTypes.object,
  onEvent: PropTypes.func,
}

F.defaultProps = {
  props: {},
  onEvent: () => null,
}

export default F
