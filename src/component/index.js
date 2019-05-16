import React from 'react'
import Input from './input'

export default function ({ props, onEvent }) {
  const {
    type = 'text',
    key,
    label,
    onChange,
    ...rest
  } = props

  let c = null

  if (type === 'text' && rest.value) {
    c = (
      <span>{rest.value}</span>
    )
  }

  if (type === 'input') {
    c = (
      <Input {...rest} onChange={v => onEvent(onChange, key, v)} />
    )
  }

  return (
    <div>
      <label>{label}: </label>
      {c}
    </div>
  )
}
