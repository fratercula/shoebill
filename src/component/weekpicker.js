import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

function W({
  value,
  onChange,
  format,
  ...props
}) {
  return (
    <DatePicker.WeekPicker
      {...props}
      format
      value={moment(value, format)}
      onChange={m => onChange(m.format(format))}
    />
  )
}

W.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
}

W.defaultProps = {
  format: 'YYYY-wo',
}

export default W
