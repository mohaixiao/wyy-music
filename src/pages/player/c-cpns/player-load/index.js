import React, { memo } from 'react'

import { LoadWrapper, Loads } from './style'


const PlayerLoad = memo(() => {


  return (
    <LoadWrapper className='sprite'>
      <h4 className='title'>网易云音乐多端下载</h4>
      <Loads className='sprite'>
        <a href="#"><i className='iphone sprite'>iphone</i></a>
        <a href="#"><i className='pc sprite'>pc</i></a>
        <a href="#"><i className='android sprite'>android</i></a>
      </Loads>
      <p>同步歌单，随时畅听320k好音乐</p>
    </LoadWrapper>
  )
})

export default PlayerLoad