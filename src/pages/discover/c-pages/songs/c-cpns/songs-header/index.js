import React, { useState, memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getSongList } from '../../store/actionCreators'

import SongsCategory from '../songs-category'
import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style'

const SongsHeader = memo(() => {

    // hooks 显示是否出现菜单
    const [showCategory, setShowCategory] = useState(false);

    // redux 获得当前标题
    const { currentCategory } = useSelector(state => ({
        currentCategory: state.getIn(["songs", "currentCategory"]),
    }), shallowEqual);
    const dispatch = useDispatch();

    // 是否显示菜单栏
    const changeShowCategory = (e) => {
        setShowCategory(!showCategory)
    }

    const checkHot = (e) => {
        // 请求当前分类最前面0的数据SongList
        dispatch(getSongList(0, 'hot'));
    }

    return (
        <SongsHeaderWrapper>
            <SongsHeaderLeft>
                <span className="title">{currentCategory}</span>
                <button className="select" onClick={e => changeShowCategory()}>
                    <span>选择分类</span>
                    <i className="sprite_icon2"></i>
                </button>
                {showCategory ? <SongsCategory changeShowCategory={changeShowCategory} /> : null}
            </SongsHeaderLeft>
            <SongsHeaderRight>
                <a className="hot" onClick={e => checkHot(e)}>热门</a>
            </SongsHeaderRight>
        </SongsHeaderWrapper>
    )
})

export default SongsHeader