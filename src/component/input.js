import React from 'react'
import { Input } from 'antd'

export default function ({ onChange, ...props }) {
  return (
    <Input
      {...props}
      onChange={e => onChange(e.target.value)}
    />
  )
}
