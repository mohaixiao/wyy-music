import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import RadioRecommendCover from '@/components/radio-recommend-cover'
import ThemeHeaderNormal from '@/components/theme-header-normal'
import { getRadioRecommend } from '../../store/actionCreators';

import { RadioRecommendWrapper } from './style'

const RadioRecommend = memo(() => {

  // redux hooks
  const { currentId, recommends } = useSelector((state) => ({
    currentId: state.getIn(["djradio", "currentId"]),
    recommends: state.getIn(["djradio", "recommends"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // react hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId]);

  return (
    <RadioRecommendWrapper>
      <ThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends && recommends.slice(0, 5).map((item) => {
            return (
              <RadioRecommendCover info={item} key={item.id} />
            )
          })
        }
      </div>
    </RadioRecommendWrapper>
  )
})

export default RadioRecommend