import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from "react-redux";

import SongOperationBar from '../../../../components/song-operation-bar'

import {
    PlayerInfoWrapper,
    PlayerInfoLeft,
    PlayerInfoRight
} from './style'


const PlayerInfo = memo(() => {

    // props and hooks
    const [isSpread, setIsSpread] = useState(false);

    // redux hooks
    const { currentSong, currentLyrics} = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        currentLyrics: state.getIn(["player", "currentLyrics"])
    }), shallowEqual)

    // handle code
    const totalLyricCount = isSpread ? currentLyrics.length : 13;

    return (
        <PlayerInfoWrapper>
            <PlayerInfoLeft>
                <div className='sprite_covor left-top'>
                    <img className='image' src={`${currentSong.al.picUrl}?param=130y130`} alt="" />
                </div>
                <div className='left-bottom'>
                    <i className='sprite_icon2 icon'></i>
                    <a className='button' href="">生成外链播放器</a>
                </div>
            </PlayerInfoLeft>
            <PlayerInfoRight isSpread={isSpread}>
                <div className="header">
                    <i className='sprite_icon2 header-icon'></i>
                    <h3 className='title'>{currentSong.name}</h3>
                </div>
                <div className="singer">
                    <em>歌手：</em> <a href="">{currentSong.ar[0].name}</a>
                </div>
                <div className="album">
                    <em>所属专辑：</em><a href="">{currentSong.al.name}</a>
                </div>
                <SongOperationBar
                    favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)" />

                <div className="lyric">
                    <div className="lyric-info">
                        {
                            currentLyrics.slice(0, totalLyricCount).map((item, index) => {
                                return <p className='text' key={item.time}>{item.content}</p>
                            })
                        }
                    </div>
                    <button className="lyric-control"
                        onClick={e => setIsSpread(!isSpread)}>
                        {isSpread ? "收起" : "展开"}
                        <i className="sprite_icon2"></i>
                    </button>
                </div>
            </PlayerInfoRight>
        </PlayerInfoWrapper>
    )
})

export default PlayerInfo