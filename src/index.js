import 'preact-material-components/style.css'
import 'material-expansion-panel/dist/material-expansion-panel.min.css'
import './style'
import 'whatwg-fetch'
import { toggleTheme, getCollections } from './actions'

import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'
import App from './app'

const theme = localStorage.getItem('theme')
if (theme === 'night') {
  document.body.classList.add('mdc-theme--dark')
  store.dispatch(toggleTheme(theme))
}
store.dispatch(getCollections())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
)
