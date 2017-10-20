import { combineReducers } from 'redux'
import {
  LOAD_BOUNS,
  LOADED_BOUNS,
  LOAD_MORE_BOUNS,
  LOADED_LATEST_DATA,
  TOGGLE_THEME,
  LOADED_ANDROID_DATA,
  LOADED_IOS_DATA,
  LOADED_VIDEO_DATA,
  LOADED_EXPAND_DATA,
  LOADED_FRONTEND_DATA,
  LOADED_RANDOM_DATA,
  ADD_COLLECTION,
  REMOVE_COLLECTION,
  GET_COLLECTIONS
} from '../actions/type'

function latest(state = [], action = {}) {
  switch (action.type) {
    case LOADED_LATEST_DATA:
      return [...action.results]
    default:
      return state
  }
}
function search_result(state = [], action = {}) {
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
    case LOADED_ANDROID_DATA:
      return action.results
    default:
      return state
  }
}
function ios(state = [], action = {}) {
  switch (action.type) {
    case LOADED_IOS_DATA:
      return action.results
    default:
      return state
  }
}
function video(state = [], action = {}) {
  switch (action.type) {
    case LOADED_VIDEO_DATA:
      return action.results
    default:
      return state
  }
}
function expand(state = [], action = {}) {
  switch (action.type) {
    case LOADED_EXPAND_DATA:
      return action.results
    default:
      return state
  }
}
function front_end(state = [], action = {}) {
  switch (action.type) {
    case LOADED_FRONTEND_DATA:
      return action.results
    default:
      return state
  }
}
function theme(state = 'day', action = {}) {
  switch (action.type) {
    case TOGGLE_THEME:
      return action.theme
    default:
      return state
  }
}
function random(state = [], action = {}) {
  switch (action.type) {
    case LOADED_RANDOM_DATA:
      return action.results
    default:
      return state
  }
}
function collections(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLLECTION:
      return [...state, action.item]
    case REMOVE_COLLECTION:
      const idx = state.findIndex(item => item._id === action.item._id)
      state.splice(idx, 1)
      return [...state]
    case GET_COLLECTIONS:
      return action.collections
    default:
      return state
  }
}
export default combineReducers({
  latest,
  bouns,
  android,
  ios,
  video,
  expand,
  front_end,
  theme,
  random,
  collections,
  search_result
})
