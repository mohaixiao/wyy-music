import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
// 加工图片大小补全url
import { getSizeImage } from '@/utils/format-utils';

import { getSongDetailAction, addSongDetailAction } from '@/pages/player/store';

import { TopRankingWrapper } from './style'

const TopRanking = memo((props) => {

    const dispatch = useDispatch()

    const { info } = props

    // 10歌曲
    const { tracks = [] } = info;

    // 播放歌曲
    const playMusic = (item) => {
        dispatch(getSongDetailAction(item.id))
    }

    // 添加歌曲到列表
    const addMusic = (item) => {
        dispatch(addSongDetailAction(item.id))
    }

    return (
        <TopRankingWrapper>
            <div className="header">
                <div className='image'>
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
                    {/* 遮罩层 image_cover全局样式下*/}
                    <a href="/todo" className="image_cover">ranking</a>
                </div>
                <div className="info">
                    {/* 标题 */}
                    <a href="/todo">{info.name}</a>
                    {/* icon */}
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks && tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    {/* 标题 */}
                                    <a href='/todo' className="name text-nowrap">{item.name}</a>
                                    {/* 选择按钮 */}
                                    <div className="operate">
                                        <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                                        <button className="btn sprite_icon2 addto" onClick={e => addMusic(item)}></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})

export default TopRanking