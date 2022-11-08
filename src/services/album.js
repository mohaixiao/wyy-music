import request from './request';

// 热门新碟
export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}

export function getTopAlbums(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}