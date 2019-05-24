import React from 'react'
import { render } from 'react-dom'
import Shoebill from '../src'
import data from './data'

render((
  <Shoebill
    defaultData={data}
    labelCol={{ span: 3 }}
    labelAlign="left"
    wrapperCol={{ span: 18 }}
  />
), document.querySelector('#root'))
