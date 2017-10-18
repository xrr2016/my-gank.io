const BASEURL = 'http://gank.io/api'

export const TYPE = {
  all: 'all',
  boon: '福利',
  android: 'Android',
  ios: 'iOS',
  video: '休息视频',
  expand: '拓展资源',
  front_end: '前端'
}

const API = {
  // 随机数据：http://gank.io/api/random/data/分类/个数
  random: (type = TYPE.all, num = 1) =>
    fetch(`${BASEURL}/random/${type}/${num}`).then(res => res.json()),
  // 每日数据： http://gank.io/api/day/年/月/日
  single_day: (
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
    day = new Date().getDate()
  ) => fetch(`${BASEURL}/day/${year}/${month}/${day}`).then(res => res.json()),
  // 分类数据: http://gank.io/api/data/数据类型/请求个数/第几页
  category: (type = TYPE.all, num = 10, page = 1) =>
    fetch(`${BASEURL}/data/${type}/${num}/${page}`).then(res => res.json()),
  // 支持提交干货到审核区:https://gank.io/api/add2gank 方式: POST
  submit: data => {
    if (!data) return
    return fetch(`${BASEURL}/add2gank`, {
      method: 'POST',
      body: new FormData(data)
    }).then(res => res.status)
  },
  // 搜索 API
  search: (type = TYPE.all, count = 10, page = 1) =>
    fetch(
      `${BASEURL}/search/query/listview/category/${type}/count/${count}/page/${page}`
    ).then(res => res.json()),
  // 所有干货，支持配图数据返回 （除搜索 Api）。
  with_img: (
    type = TYPE.all,
    month = new Date().getMonth() + 1,
    day = new Date().getDate()
  ) => fetch(`${BASEURL}/data/${type}/${month}/${day}`).then(res => res.json())
}

export default API
