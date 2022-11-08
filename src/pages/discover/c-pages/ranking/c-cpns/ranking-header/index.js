import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getSizeImagey, formatMonthDay } from '@/utils/format-utils'

import SongOperationBar from '@/components/song-operation-bar';

import { RankingHeaderWrapper } from './style'
import { get } from 'immutable';

const RankingHeader = memo(() => {

  // other hooks 取得榜单和点击当前下标
  const { currentIndex, playList, topList } = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"]),
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual)
  const dispatch = useDispatch();

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img className="img" src={getSizeImagey(playList.coverImgUrl, 150)} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
        <div className="update-f">({topList[currentIndex] && topList[currentIndex].updateFrequency})</div>
        </div>
        <SongOperationBar
          favorTitle={`(${playList.subscribedCount})`}
          shareTitle={`(${playList.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${playList.commentCount})`} />
      </div>
    </RankingHeaderWrapper>
  )
})

export default RankingHeader