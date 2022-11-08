import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// 获得推荐榜单页面
import { getHotRecommendsAction } from '../../store/actionCreators'
// 限制请求8条数据
import { HOT_RECOMMEND_LIMIT } from '@/common/contants.js'

// 抬头标题
import ThemeHeaderRem from '@/components/theme-header-rcm'
// 每条数据展示
import SongsCover from '../../../../../../components/songs-cover';

import { HotRecommendWrapper } from './style'


const HotRecommend = memo(() => {
  // react-redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // 请求数据
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <div>
        {/* 抬头 */}
        <ThemeHeaderRem title={'热门推荐'} keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
        {/* 表单 */}
        <div className="recommend-list">
          {
            hotRecommends && hotRecommends.map((item, index) => {
              return <SongsCover
                key={item.id}
                picUrl={item.picUrl}
                playCount={item.playCount}
                name={item.name}
              />
            })
          }
        </div>
      </div>
    </HotRecommendWrapper>

  )
})

export default HotRecommend

