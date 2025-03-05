// import React from 'react'
// import Calc from './Components/Calc'
// import SimpleCrud from './Components/SimpleCrud'
// import LocalCrud from './Components/LocalCrud'

// export default function App() {
//   return (
//     <div>
//       {/* <FunctionComponent/> */}
//       {/* <Calc/> */}
//       {/* <SimpleCrud/> */}
//       <LocalCrud/>
//     </div>
//   )
// } 


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Filter from './filtering,Searching,Sorting/Filter'
import Sorting from './filtering,Searching,Sorting/Sorting'
import Searching from './filtering,Searching,Sorting/Searching'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Filter />} ></Route>
          <Route path='/sorting' Component={Sorting} ></Route>
          <Route path='/searching/:id' Component={Searching} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
