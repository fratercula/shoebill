import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

function T({ onChange, ...props }) {
  return (
    <Input.TextArea
      rows={4}
      {...props}
      onChange={e => onChange(e.target.value)}
    />
  )
}

T.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default T
