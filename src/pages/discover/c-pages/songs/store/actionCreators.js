import * as actionTypes from './constants';
import { PER_PAGE_NUMBER } from './constants';

import {
  getSongCategory,
  getSongCategoryList
} from "@/services/songs";

import {
  handleSongsCategory
} from "@/utils/handle-data";

// 改变抬头
const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})
// 改变歌单全部显示
const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})

// 
export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

// 获取歌单并改变抬头
export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

// 获得歌曲全部展示
export const getSongList = (page,hot = '', limit = 35, ) => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    const name = getState().getIn(["songs", "currentCategory"]);

    // 2.获取数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER, limit = 35, hot).then(res => {
      dispatch(changeSongListAction(res));
    })
  }
}

