import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import classNames from "classnames";

import { getSizeImage } from '@/utils/format-utils'

import {
    getTops,
    changeCurrentIndex,
    getRanking
} from '../../store/actionCreators'

import { RankingTopWrapper } from './style';


const RankingTop = memo(() => {

    // other hooks 取得榜单和点击当前下标
    const { topList, currentIndex } = useSelector(state => ({
        topList: state.getIn(["ranking", "topList"]),
        currentIndex: state.getIn(["ranking", "currentIndex"])
    }), shallowEqual)
    const dispatch = useDispatch();

    // hooks
    useEffect(() => {
        const id = (topList[currentIndex] && topList[currentIndex].id);
        if (!id) return;
        dispatch(getRanking(id))
    }, [topList, dispatch, currentIndex])

    const hanldeItemClick = (index) => {
        // 切换当前下标
        dispatch(changeCurrentIndex(index));
        // 请求点击榜单详情页面
        const id = topList[currentIndex].id;
        dispatch(getRanking(id))
    }

    return (
        <RankingTopWrapper>
            {
                topList && topList.map((item, index) => {

                    let header; // 设置榜单标题

                    if (index === 0 || index === 4) {
                        header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                    }
                    return (
                        <div key={item.id}>
                            {header}
                            <div className={classNames("item", { "active": index === currentIndex })}
                                onClick={e => hanldeItemClick(index)}>
                                <img src={getSizeImage(item.coverImgUrl, 40)} alt="榜单" />
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="update">{item.updateFrequency}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </RankingTopWrapper>
    )
})

export default RankingTop