const BaseUrl = 'http://gank.io/api'

export const Type = {
  all: 'all',
  boon: '福利',
  android: 'Android',
  ios: 'iOS',
  video: '休息视频',
  expand: '拓展资源',
  front_end: '前端'
}

const Api = {
  // 随机数据：http://gank.io/api/random/data/分类/个数
  random: (Type = Type.all, num = 1) => {
    return fetch(`${BaseUrl}/random/${Type}/${num}`).then(res => {
      return res.json()
    })
  },
  // 每日数据： http://gank.io/api/day/年/月/日
  date: (
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
    day = new Date().getDate()
  ) => {
    return fetch(`${BaseUrl}/day/${year}/${month}/${day}`).then(res => {
      return res.json()
    })
  },
  // 分类数据: http://gank.io/api/data/数据类型/请求个数/第几页
  category: (Type = Type.all, num = 20, page = 1) => {
    return fetch(`${BaseUrl}/data/${Type}/${num}/${page}`).then(res => {
      return res.json()
    })
  },
  // 支持提交干货到审核区:https://gank.io/api/add2gank 方式: POST
  submit: data => {
    if (!data) return
    return fetch(`${BaseUrl}/add2gank`, {
      method: 'POST',
      body: new FormData(data)
    }).then(res => res.status)
  },
  // 搜索 API
  search: (type = Type.all, count = 20, page = 1) => {
    return fetch(
      `${BaseUrl}/search/query/listview/category/${type}/count/${count}/page/${page}`
    ).then(res => {
      return res.json()
    })
  },
  // 获取发过干货日期接口:
  publishedDates: () => {
    return fetch(`${BaseUrl}/day/history`).then(res => res.json())
  }
}

export default Api
