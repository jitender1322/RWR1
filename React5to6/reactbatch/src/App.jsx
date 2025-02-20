import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import ReduxCounter from './components/ReduxCounter'
import ReduxCrud from './components/ReduxCrud'

export default function App() {
  const name = "Sumit"
  return (
    <div>
      <Provider store={store}>
      {/* <ReduxCounter/> */}
      <ReduxCrud/>
      </Provider>
    </div>
  )
}
