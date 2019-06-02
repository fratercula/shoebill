import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

function D({
  value,
  onChange,
  format,
  ...props
}) {
  return (
    <DatePicker.RangePicker
      {...props}
      format
      value={value.map(v => moment(v, format))}
      onChange={ms => onChange(ms.map(m => m.format(format)))}
    />
  )
}

D.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
}

D.defaultProps = {
  format: 'YYYY-MM-DD HH:mm:ss',
}

export default D
