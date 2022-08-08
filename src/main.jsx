import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './templates/App'

import Home from './templates/pages/Home'
import Variables from './templates/pages/Variables'
import Variable from './templates/pages/Variable'
import Page404 from './templates/pages/Page404'

import './css/main.css'

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>

        <Route path="variables" element={<Variables/>}>
          <Route index element={
            <p className="flex-grow">Select a variable</p>
          }
          />
          <Route path=":var" element={<Variable/>}/>
        </Route>

        <Route path="*" element={<Page404/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,

  rootElement
)
