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
    <DatePicker
      {...props}
      format
      value={moment(value, format)}
      onChange={m => onChange(m.format(format))}
    />
  )
}

D.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
}

D.defaultProps = {
  format: 'YYYY-MM-DD',
}

export default D
