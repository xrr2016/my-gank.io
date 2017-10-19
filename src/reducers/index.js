import { combineReducers } from 'redux'
import {
  LOAD_BOUNS,
  LOADED_BOUNS,
  LOAD_MORE_BOUNS,
  LOADED_LATEST_DATA,
  TOGGLE_THEME
} from '../actions/type'

function latest(state = [], action = {}) {
  switch (action.type) {
    case LOADED_LATEST_DATA:
      return [...action.results]
    default:
      return state
  }
}
function search(state = [], action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
function bouns(state = [], action = {}) {
  switch (action.type) {
    case LOADED_BOUNS:
      return [...action.results]
    default:
      return state
  }
}
function android(state = [], action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
function ios(state = [], action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
function video(state = [], action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
function expand(state = [], action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
function front_end(state = [], action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
function theme (state = "day", action = {}) {
  switch (action.type) {
    case TOGGLE_THEME:
      return action.theme
    default:
      return state
  }
}
export default combineReducers({
  latest,
  search,
  bouns,
  android,
  ios,
  video,
  expand,
  front_end,
  theme
})
