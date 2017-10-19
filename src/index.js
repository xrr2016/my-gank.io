import 'preact-material-components/style.css'
import 'react-placeholder/lib/reactPlaceholder.css'
import './style'
import 'whatwg-fetch'

import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'
import App from './app'

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.body
)
