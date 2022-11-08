import request from './request';

// 获取电台分类小图标
export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist"
  })
}

// 请求新电台
export function getDjRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

export function getDjRadios(cateId, limit, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}