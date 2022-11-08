import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Paginations from '@/components/pagination'
import ThemeHeaderNormal from '@/components/theme-header-normal'
import RadioRankingCover from '@/components/radio-ranking-cover'

import { RadioRankingWrapper } from './style'
import { getRadios } from '../../store/actionCreators';
import { useState } from 'react';

const RadioRanking = memo(() => {
  // state
  const [currentPage,setCurrentPage] = useState(1);

  // redux hooks
  const { currentId, radios } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    radios: state.getIn(["djradio", "radios"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // react hooks
  useEffect(() => {
    if (currentId == 0) return;
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId])

  // hanlde function 换页
  const onPageChange = (page,pageSize) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId,page*30));
  }

  return (
    <RadioRankingWrapper>
      <ThemeHeaderNormal title="电台排行榜" />
      <div className="ranking-list">
        {
          radios.map((item, index) => {
            return (
              <RadioRankingCover radio={item} key={index} />
            )
          })
        }
      </div>
      <Paginations
        currentPage={currentPage}
        total={1000}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </RadioRankingWrapper>
  )
})

export default RadioRanking