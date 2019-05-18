import React from 'react'
import { TimePicker } from 'antd'
import moment from moment

export default function ({ value, onChange, format = 'HH:mm:ss', ...props }) {
  return (
    <TimePicker
      {...props}
      format
      value={moment(value, format)}
      onChange={m => onChange(m.format(format))}
    />
  )
}
