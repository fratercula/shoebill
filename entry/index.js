import React from 'react'
import { render } from 'react-dom'
import Custom from './custom'
import Shoebill from '../src'
import data from './data'

render((
  <Shoebill
    style={{ width: 600, marginTop: 60 }}
    components={{ Custom }}
    defaultData={data}
    labelCol={{ span: 4 }}
    labelAlign="left"
    wrapperCol={{ span: 20 }}
  />
), document.querySelector('#root'))
