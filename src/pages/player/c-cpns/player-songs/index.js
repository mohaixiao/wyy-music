import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from "@/utils/format-utils"
import { getSimiPlaylistAction, getSimiSongsAction } from '../../store/actionCreators';

import { PlayerSongsWrapper, Songlist, Simisongs } from './style'

const PlayerSongs = memo(() => {

  //react-redux hooks
  const dispatch = useDispatch()
  const {
    simiPlaylist,
    simiSongs
  } = useSelector((state) => ({
    simiPlaylist: state.getIn(["player", "simiPlaylist"]),
    simiSongs: state.getIn(["player", "simiSongs"])
  }), shallowEqual)


  useEffect(() => {
    dispatch(getSimiPlaylistAction(1982706733))
    dispatch(getSimiSongsAction(1982706733))
  }, []);

  return (
    <PlayerSongsWrapper >
      <h4 className='title'>包含这首歌的歌单</h4>
      <Songlist>
        {
          simiPlaylist.map((item, index) => {
            return (
              <div className="item">
                <img src={getSizeImage(simiPlaylist[index].coverImgUrl, 50)} alt="" />
                <span className="right">
                  <p className='title'>{simiPlaylist[index].name}</p>
                  <p>by{simiPlaylist[index].creator.nickname}</p>
                </span>
              </div>
            )
          })
        }
      </Songlist>
      <h4 className='title'>相似歌曲</h4>
      <Simisongs>
        {
          simiSongs.map((item, index) => {
            return (
              <div className="item">
                <div>
                  <a href="#">
                    <p className='title'>{simiSongs[index].name}</p>
                  </a>
                  <a href="#">
                    <p>{simiSongs[index].artists[0].name}</p>
                  </a>
                </div>
                <div>
                  <a href="#"><i className='play icon2'></i></a>
                  <a href="#"><i className='add icon2'></i></a>
                </div>
              </div>
            )
          })
        }
      </Simisongs>
    </PlayerSongsWrapper>
  )
})

export default PlayerSongs