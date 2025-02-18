import React from 'react'
import { Provider } from 'react-redux'
import ReduxCounter from './Redux/ReduxCounter'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
      <Provider store={store} >
        <ReduxCounter/>
      </Provider>
    </div>
  )
}
