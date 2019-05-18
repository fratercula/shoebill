import React from 'react'
import { DatePicker } from 'antd'
import moment from moment

export default function ({ value, onChange, format = 'YYYY-MM', ...props }) {
  return (
    <DatePicker.MonthPicker
      {...props}
      format
      value={moment(value, format)}
      onChange={m => onChange(m.format(format))}
    />
  )
}
