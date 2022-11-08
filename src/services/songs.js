import request from "./request";


// 歌单菜单
export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

// 全部歌单展示
export function getSongCategoryList(cat="全部", offset=0, limit = 35, order = '') {
  return request({
    url: "/top/playlist",
    params: {
      order,
      cat,
      limit,
      offset
    }
  })
}