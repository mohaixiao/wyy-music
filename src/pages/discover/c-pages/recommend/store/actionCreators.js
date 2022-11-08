import * as actionTypes from './constants';

import { getTopBanner, getHotRecommends, getNewAlbum, getTopList, getInSingers ,getHotAnchor} from '@/services/recommend'

// 轮播图数据
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
};

// 推荐榜单页面
const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
});

export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res));
    })
  }
};

// newAlbum 新碟上架
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
});

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// rank榜单

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

// 请求热门榜单
export const getTopListAction = (id) => {
  return dispatch => {
    getTopList(id).then(res => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629:
          dispatch(changeNewRankingAction(res));
          break;
        case 2884035:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  }
}

// 入驻歌手 singers

const changeInSingersAction = (res) => ({
  type: actionTypes.CHANGE_IN_SINGERS,
  inSingers: res.artists
})

export const getInSingersAction = (res) => {
  return dispath => {
      getInSingers().then(res => {
        dispath(changeInSingersAction(res))
      })
  }
}

// 热门主播

const changeHotAnchorAction = (res) => ({
  type:actionTypes.CHANGE_HOT_ANCHORS,
  hotAnchors:res.data.list
})

export const getHotAnchorAction = (limit) => {
  return dispatch => {
    getHotAnchor(limit).then(res => {
        dispatch(changeHotAnchorAction(res))
    })
  }
}