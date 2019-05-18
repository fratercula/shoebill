import React from 'react'
import { Input } from 'antd'

export default function ({ onChange, ...props }) {
  return (
    <Input.TextArea
      rows={4}
      {...props}
      onChange={e => onChange(e.target.value)}
    />
  )
}
