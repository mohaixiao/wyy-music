import React, { memo } from 'react';

// 加工播放数据（亿万千） 加工图片大小
import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from './style';

const SongsCover = memo((props) => {
  // 图片url，播放量，介绍，作者名
  const { picUrl, playCount, name, nickname } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        {/* 图片 */}
        <img src={getSizeImage(picUrl, 140)} alt="" />
        {/* 歌单播放数据和icon */}
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              {/* 播放量logo */}
              <i className="sprite_icon erji"></i>
              {getCount(playCount)}
            </span>
            {/* 播放 logo */}
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      {/* 歌单名字 */}
      <div className="cover-bottom">
        {name}
        {nickname ? <p className='nickname'>by{nickname}</p> : ""}
      </div>
    </SongsCoverWrapper>
  )
})

export default SongsCover;