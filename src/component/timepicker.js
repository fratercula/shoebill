import React from 'react'
import { TimePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

function T({
  value,
  onChange,
  format,
  ...props
}) {
  return (
    <TimePicker
      {...props}
      format
      value={moment(value, format)}
      onChange={m => onChange(m.format(format))}
    />
  )
}

T.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
}

T.defaultProps = {
  format: 'HH:mm:ss',
}

export default T
