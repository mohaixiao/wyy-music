import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// 请求热门榜单
import { getTopListAction } from '../../store/actionCreators';

// 抬头
import ThemeHeaderRem from '@/components/theme-header-rcm'
// 
import TopRanking from '@/components/top-ranking';
import { RecommendRankingWrraper } from './style';

const RecommendRanking = memo(() => {

  //react-redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // react hooks
  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);

  return (
    <RecommendRankingWrraper>
      {/* 抬头 */}
      <ThemeHeaderRem title={"榜单"}></ThemeHeaderRem>
      <div className="tops">
        <TopRanking info={upRanking}></TopRanking>
        <TopRanking info={newRanking}></TopRanking>
        <TopRanking info={originRanking}></TopRanking>
      </div>
    </RecommendRankingWrraper>
  )
})

export default RecommendRanking