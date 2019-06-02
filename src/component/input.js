import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

function I({ onChange, ...props }) {
  return (
    <Input
      {...props}
      onChange={e => onChange(e.target.value)}
    />
  )
}

I.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default I
