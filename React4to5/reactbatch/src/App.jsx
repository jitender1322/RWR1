import React from 'react'
import { Provider } from 'react-redux'
import ReduxCounter from './Redux/ReduxCounter'
import { store } from './app/Store'
import ReduxCrud from './Redux/ReduxCrud'
import ReduxApi from './Redux/ReduxApi'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <ReduxCounter/> */}
        {/* <ReduxCrud/> */}
        <ReduxApi/>
      </Provider>
    </div>
  )
}
