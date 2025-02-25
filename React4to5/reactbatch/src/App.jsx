import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Filtering from './Components/Filtering'
import Sorting from './Components/Sorting'
import UseReducer from './Components/UseReducer'

export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Filtering/>}  ></Route>
        <Route path='/sort' element={<Sorting/>}  ></Route>
      </Routes>
      </BrowserRouter> */}
      <UseReducer/>
    </div>
  )
}
