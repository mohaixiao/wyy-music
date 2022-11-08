import React, { memo } from 'react'

import RadioCategory from './c-cpns/radio-category'
import RadioRanking from './c-cpns/radio-ranking'
import RadioRecommend from './c-cpns/radio-recommend'

import { DjradioWrapper } from './style'

const Djradio = memo(() => {
  return (
    <DjradioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRanking />
    </DjradioWrapper>
  )
})

export default Djradio