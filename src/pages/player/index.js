import React, { memo } from 'react'

import PlayerComment from './c-cpns/player-comment'
import PlayerInfo from './c-cpns/player-info'
import PlayerLoad from './c-cpns/player-load'
import PlayerSongs from './c-cpns/player-songs'
import PlayerUser from './c-cpns/player-user'

import {
  PlayerbarWrapper,
  PlayerbarLeft,
  PlayerbarRight
} from './style'


const Player = memo(() => {

  return (
    < PlayerbarWrapper>
      <div className="content wrap-v2">
        <PlayerbarLeft>
          <PlayerInfo />
          <PlayerComment />
        </PlayerbarLeft>
        <PlayerbarRight>
          <PlayerSongs />
          <PlayerLoad />
          <PlayerUser />
        </PlayerbarRight>
      </div>
    </ PlayerbarWrapper>
  )
})

export default Player










