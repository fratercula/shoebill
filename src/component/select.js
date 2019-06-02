import React from 'react'
import { Select } from 'antd'
import PropTypes from 'prop-types'

function S({ onChange, options, ...props }) {
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

S.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default S
