import React from 'react'
import { render } from 'react-dom'
import Shoebill from '../src'
import data from './data'

render((
  <Shoebill defaultData={data} />
), document.querySelector('#root'))
