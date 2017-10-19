import Api from '../api'
import { Type } from '../api'
import {
  LOADED_BOUNS,
  LOAD_MORE_BOUNS,
  LOADED_LATEST_DATA,
  LOAD_SEARCH_DATA,
  TOGGLE_THEME
} from './type'
// 获取福利数据
export const fetchBounsData = () => {
  return dispatch => {
    return Api.category(Type.boon).then(data => {
      dispatch(loadedBouns(data.results))
    })
  }
}

export const loadedBouns = results => {
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
// 获取最新数据
export const loadedLatestData = results => {
  return {
    type: LOADED_LATEST_DATA,
    results
  }
}

export const fetchLatestData = () => {
  return dispatch => {
    Api.publishedDates()
      .then(res => {
        return res.results[0].split('-')
      })
      .then(date => {
        return Api.date(date[0], date[1], date[2]).then(data =>
          dispatch(loadedLatestData(data.results))
        )
      })
  }
}
// 查询数据
export const fetchSearchData = () => {
  return dispatch => {
    return Api.search().then(data => {
      dispatch(loadedSearchData(data.results))
    })
  }
}

export const loadedSearchData = results => {
  return {
    type: LOAD_SEARCH_DATA,
    results
  }
}
// 切换主题
export const toggleTheme = theme => {
  localStorage.setItem('theme', theme)
  return {
    type: TOGGLE_THEME,
    theme
  }
}