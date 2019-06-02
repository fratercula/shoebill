import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

function M({
  value,
  onChange,
  format,
  ...props
}) {
  return (
    <DatePicker.MonthPicker
      {...props}
      format
      value={moment(value, format)}
      onChange={m => onChange(m.format(format))}
    />
  )
}

M.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
}

M.defaultProps = {
  format: 'YYYY-MM',
}

export default M
