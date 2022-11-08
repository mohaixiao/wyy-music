import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  getTops,
  changeCurrentIndex,
  getRanking
} from './store/actionCreators'

import Paginations from '../../../../components/pagination'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'
import RankingTop from './c-cpns/top-ranking'

import { RankingWrapper, Rankingleft, RankingRight } from './style'

export default memo(function Ranking() {

  // other hooks
  const dispatch = useDispatch();

  // 请求榜单
  useEffect(() => {
    dispatch(getTops())
  }, [dispatch]);

  return (
    <RankingWrapper className='wrap-v2'>
      <Rankingleft>
        <RankingTop />
      </Rankingleft>
      <RankingRight>
        <RankingHeader />
        <RankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
