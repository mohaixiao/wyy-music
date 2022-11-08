import React, { memo } from 'react'

import { hotRadios } from '../../../../../../common/local-data';
import { getSizeImage } from '@/utils/format-utils'

import { HotAnchorWrapper } from './style'

const HotAnchor = memo(() => {

  return (
    <HotAnchorWrapper>
      <div className='hot-anchor'>
        <h4>热门主播</h4>
      </div>
      {
        hotRadios && hotRadios.map((item, index) => {
          return (
            <div className='hotAnchors'>
              <img src={getSizeImage(item.picUrl, 40)} alt="" />
              <div className='desc'>
                <a href={item.url}>{item.name}</a>
                <div className='text-nowrap name'>{item.position}</div>
              </div>
            </div>
          )
        })
      }
    </HotAnchorWrapper>
  )
})

export default HotAnchor