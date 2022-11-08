import request from './request';

export function getTopBanner() {
    return request({
        url: '/banner'
    })
}

export function getHotRecommends(limit) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}

export function getNewAlbum(limit) {
    return request({
        url: "/top/album",
        params: {
            limit
        }
    })
}

export function getTopList(id) {
    return request({
        url: "/playlist/detail",
        params: {
            id
        }
    })
}


export function getInSingers() {
    return request({
        url: '/top/artists'
    })
}

// 热门主播
export function getHotAnchor(limit) {
    return request({
        url: '/dj/toplist/popular',
        params: {
            limit
        }
    })
}