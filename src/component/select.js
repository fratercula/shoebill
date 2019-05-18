import React from 'react'
import { Select } from 'antd'

export default function ({ onChange, options, ...props }) {
  return (
    <Select
      {...props}
      onChange={onChange}
    >
      {
        options.map(({ label, value }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))
      }
    </Select>
  )
}
