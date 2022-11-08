import React, { memo } from 'react'

// 轮播图
import TopBanner from './c-cpns/top-banner'
// 热门推荐
import HotRecommend from './c-cpns/hot-recommend'
// 榜单
import RecommendRanking from './c-cpns/recommend-ranking'
// 热门新碟
import NewAlbum from './c-cpns/new-album';
// 用户登录
import UserLogin from './c-cpns/user-login';
// 热门主播
import HotAnchor from './c-cpns/hot-anchor'
// 入驻歌手
import SettleSinger from './c-cpns/settle-singer';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

const Recommend = memo((props) => {

  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})


export default (Recommend)