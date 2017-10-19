import Api from '../api'
import { Type } from '../api'
import { LOAD_BOUNS,LOADED_BOUNS, LOAD_MORE_BOUNS } from './type'

export const fetchBounsData = () => {
  return dispatch => {
    return Api.category(Type.boon).then(data => {
      dispatch(loadedBouns(data.results))
    })
  }
}

export const loadedBouns = (results) => {
  return {
    type: LOADED_BOUNS,
    results
  }
}

export const loadMoreBouns = () => {
  return {
    type: LOAD_MORE_BOUNS
  }
}