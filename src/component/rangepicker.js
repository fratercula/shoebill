import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'

export default function ({ value, onChange, format = 'YYYY-MM-DD HH:mm:ss', ...props }) {
  return (
    <DatePicker.RangePicker
      {...props}
      format
      value={value.map(v => moment(v, format))}
      onChange={ms => onChange(ms.map(m => m.format(format)))}
    />
  )
}
