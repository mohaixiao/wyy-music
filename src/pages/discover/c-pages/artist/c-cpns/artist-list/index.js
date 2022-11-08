import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import ThemeHeaderNormal from '@/components/theme-header-normal'
import ArtistItemV1 from './c-cpns/artist-item'
import AlphaList from './c-cpns/alpha-list'

import { ArtistListWrapper } from './style'

const ArtistList = memo(() => {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <ThemeHeaderNormal title={currentType.name} rightSlot='更多 >' />
      <AlphaList />
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <ArtistItemV1 key={item.id} index={index} info={item} />
          })
        }
      </div>
    </ArtistListWrapper>
  )
})

export default ArtistList