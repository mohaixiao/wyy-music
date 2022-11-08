import React, { memo } from 'react'
import { MineWrapper } from './style'

const Mine = memo(() => {
  // 使用精灵图
  return (
    <MineWrapper className='wrap-v2'>
      <div className="img mymusic">
        <h2 >登录网易云音乐</h2>
      </div>
    </MineWrapper>
  )
})

export default Mine

