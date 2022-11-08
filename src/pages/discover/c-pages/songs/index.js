import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import {
  getCategory,
  getSongList
} from "./store/actionCreators";

import SongsHeader from './c-cpns/songs-header'
import SongsList from './c-cpns/songs-list'

import { SongsWrapper } from './style'

export default memo(function Songs() {

  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    // 获取歌单菜单
    dispatch(getCategory());

    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className='wrap-v2'>
      <SongsHeader />
      <SongsList />
    </SongsWrapper>
  )
})
