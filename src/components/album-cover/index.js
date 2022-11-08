import React, { memo } from 'react'
// 加工图片大小补全url
import { getSizeImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style'

const AlbumCover = memo((props) => {
    // info单体album size高度，width宽度 bgp 背景定位
    const { info, size = 130, width = 153, bgp = "-845px" } = props;
    return (
        <AlbumWrapper size={size} width={width} bgp={bgp}>
            <div className='album-image'>
                <img src={getSizeImage(info.blurPicUrl, size)} alt="newAlbum" />
                {/* 覆盖层 */}
                <a href="/todo" className='cover image_cover' >{info.name}</a>
            </div>
            <div className='album-info'>
                <div className="name text-nowrap">{info.name}</div>
                <div className="artist text-nowrap">{info.artist.name}</div>
            </div>
        </AlbumWrapper>
    )
})

export default AlbumCover;