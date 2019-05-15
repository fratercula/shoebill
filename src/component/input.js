import React from 'react'
import { Input } from 'antd'

export default function ({ props, onChange }) {
  return (
    <Input
      {...props}
      onChange={e => onChange(e.target.value)}
    />
  )
}
