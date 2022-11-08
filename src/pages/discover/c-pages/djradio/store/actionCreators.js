import * as actionTypes from './constants';

import {
    getDjRadioCatelist,
    getDjRadioRecommend,
    getDjRadios
} from '../../../../../services/djradio'

const changeCategoryAction = (categories) => ({
    type: actionTypes.CHANGE_RADIO_CATEGORY,
    categories: categories
})

const changeRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_RECOMMENDS,
    recommends: res.djRadios
})

export const changeCurrentIdActio = (id) => ({
    type: actionTypes.CHANGE_CURRENT_ID,
    currentId: id
})

const changeRadiosAction = (res) => ({
    type: actionTypes.CHANGE_RADIOS,
    radios: res.djRadios
})

// 获取电台分类小图标
export const getRadioCategories = () => {
    return dispatch => {
        getDjRadioCatelist().then(res => {
            console.log(res.categories)
            dispatch(changeCategoryAction(res.categories));
            const currentId = res.categories[0].id;
            dispatch(changeCurrentIdActio(currentId));
        })
    }
}
// 请求优秀新电台
export const getRadioRecommend = (currentId) => {
    return dispatch => {
        getDjRadioRecommend(currentId).then(res => {
            dispatch(changeRecommendsAction(res))
        })
    }
}

// 电台排行榜
export const getRadios = (currentId, offset) => {
    return dispatch => {
        getDjRadios(currentId, 30, offset).then(res => {
            dispatch(changeRadiosAction(res));
        })
    }
}

