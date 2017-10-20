import Api from '../api'
import { Type } from '../api'
import {
  LOADED_BOUNS,
  LOAD_MORE_BOUNS,
  LOADED_LATEST_DATA,
  LOAD_SEARCH_DATA,
  TOGGLE_THEME,
  LOADED_ANDROID_DATA,
  LOADED_IOS_DATA,
  LOADED_VIDEO_DATA,
  LOADED_EXPAND_DATA,
  LOADED_FRONTEND_DATA,
  LOADED_RANDOM_DATA
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
// 获取查询数据
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
// 获取 Android 数据
export const loadedAndroidData = results => {
  return {
    type: LOADED_ANDROID_DATA,
    results
  }
}
export const fetchAndroidData = () => {
  return dispatch => {
    return Api.category(Type.android).then(data => {
      dispatch(loadedAndroidData(data.results))
    })
  }
}
// 获取 iOS 数据
export const loadedIOSData = results => {
  return {
    type: LOADED_IOS_DATA,
    results
  }
}
export const fetchIOSData = () => {
  return dispatch => {
    return Api.category(Type.ios).then(data => {
      dispatch(loadedIOSData(data.results))
    })
  }
}
// 获取休息视频数据
export const loadedVideoData = results => {
  return {
    type: LOADED_VIDEO_DATA,
    results
  }
}
export const fetchVideoData = () => {
  return dispatch => {
    return Api.category(Type.video).then(data => {
      dispatch(loadedVideoData(data.results))
    })
  }
}
// 获取拓展资源数据
export const loadedExpandData = results => {
  return {
    type: LOADED_EXPAND_DATA,
    results
  }
}
export const fetchExpandData = () => {
  return dispatch => {
    return Api.category(Type.expand).then(data => {
      dispatch(loadedExpandData(data.results))
    })
  }
}
// 获取前端数据
export const loadedFrontEndData = results => {
  return {
    type: LOADED_FRONTEND_DATA,
    results
  }
}
export const fetchFrontEndData = () => {
  return dispatch => {
    return Api.category(Type.front_end).then(data => {
      dispatch(loadedFrontEndData(data.results))
    })
  }
}
// 获取随机数据
export const loadedRandomData = results => {
  return {
    type: LOADED_RANDOM_DATA,
    results
  }
}
export const fetchRandomData = () => {
  return dispatch => {
    return Api.random(Type.all, 5).then(data => {
      dispatch(loadedRandomData(data.results))
    })
  }
}


