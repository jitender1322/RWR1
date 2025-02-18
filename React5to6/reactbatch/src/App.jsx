import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import ReduxCounter from './components/ReduxCounter'

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <ReduxCounter/>
      </Provider>
    </div>
  )
}
