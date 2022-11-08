import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  changeSequenceAction,
  getSongDetailAction,
  changeCurrentIndexAndSongAction
} from '../store/actionCreators';
import { getSizeImage, formatDate, getPlayUrl } from '@/utils/format-utils';

import { Slider } from 'antd';
import { AppPlayerWrapper, Control, PlayInfo, Operator } from './style'
import { NavLink } from 'react-router-dom';

const AppPlayer = memo(() => {

  // props and state 
  const [currentTime, setCurrentTime] = useState(0); // 初始化时间
  const [progress, setProgress] = useState(0);// 进度条
  const [isChanging, setIsChanging] = useState(false); // 判断是否拉动进度条
  const [isPlaying, setIsPlaying] = useState(false); // 判断是否正在播放
  // redux 
  const { currentSong, sequence, playlist } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    playlist: state.getIn(["player", "playList"])
  }), shallowEqual)
  const dispatch = useDispatch();


  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(1982706733))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id); // 获取歌曲url 
    // 每次切换歌曲之后进行自动播放，失败就不播放
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    })
  }, [currentSong])

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss"); // 总时间
  const showCurrentTime = formatDate(currentTime, "mm:ss"); // 当前时间

  // 切换歌曲
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  // 修改循环，顺序，随机播放
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    console.log(currentSequence);
    dispatch(changeSequenceAction(currentSequence));
  }


  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play(); // 开始播放
    setIsPlaying(!isPlaying);
  }, [isPlaying])

  const timeUpdata = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000); // 歌曲播放ing时更新当前时间
      setProgress(currentTime / duration * 100);   // 歌曲播放ing时更新当前进度条
    }
  }

  // 歌曲播放完毕自动切歌
  const handleMusicEnded = (e) => {
    if (sequence === 2) { // 单曲循环
      audioRef.current.currentTime = 0; // 回滚进度条
      audioRef.current.play(); // 重新播放
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true); //  阻止timeUpdata内部更新
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime); // 拉动进度条时更新当前时间
    setProgress(value) // 更新进度条
  })

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000); // 防止timeUpdata里面更新不及时，滚动条回弹
    setIsChanging(false); // 保证timeUpdata内部开始更新

    // 暂停时拉动进度条触发歌曲播放
    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])

  return (
    <AppPlayerWrapper className="sprite_playbar">
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar  prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_playbar  play" onClick={e => playMusic()}></button>
          <button className="sprite_playbar  next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">
                {currentSong.name}
              </span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className='now-time'>{showCurrentTime}</span>
                <span className='divider'>/</span>
                <span className='total-time'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className='sprite_playbar1 btn icn'></button>
            <button className='sprite_playbar btn favor'></button>
            <button className='sprite_playbar btn share'></button>
          </div>
          <div className='middle sprite_playbar'></div>
          <div className="right">
            <button className='sprite_playbar btn volume'></button>
            <button className='sprite_playbar btn loop' onClick={e => changeSequence()}></button>
            <button className='sprite_playbar btn playlist'></button>
            <p className='song-total'>{playlist.length}</p>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}
        onTimeUpdate={e => timeUpdata(e)}
        onEnded={e => handleMusicEnded(e)}
      ></audio>
    </AppPlayerWrapper>
  )
})

export default AppPlayer