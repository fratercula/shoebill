import React from 'react'
import Input from './input'

export default function ({ props, onEvent }) {
  const {
    type,
    key,
    label,
    dispatch,
    ...rest
  } = props

  let c = null

  if (type === 'input') {
    c = (
      <Input {...rest} onChange={v => onEvent(dispatch, v)} />
    )
  }

  return (
    <div>
      <label>{label}</label>
      {c}
    </div>
  )
}
