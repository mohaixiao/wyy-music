import React, { memo } from 'react'
import { FriendWrapper } from './style'

const Friend = memo(() => {
  return (
    <FriendWrapper className='wrap-v2'>
      {/* 精灵图 */}
      <div className='img notlogin'>
        <div className="text">
          你可以关注明星和好友品味他们的私房歌单
          <br />
          通过他们的动态发现更多精彩音乐
        </div>
        <a href="#"></a>
      </div>
    </FriendWrapper>
  )
})

export default Friend