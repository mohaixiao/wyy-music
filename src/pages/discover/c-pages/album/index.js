import React, { memo, useEffect, useState } from 'react'

import ThemeHeaderAlbum from '../../../../components/theme-header-album'
import { getHotAlbums, getTopAlbums } from '../../../../services/album';
import AlbumCover from '../../../../components/album-cover';
import Paginations from '../../../../components/pagination'

import { HotAlbumWrapper } from './style'

const HotAlbum = memo(() => {

  const [newAlbums, setNewAlbums] = useState(0);
  const [allAlubms, setAllAlubms] = useState(0);
  const [page, setPage] = useState(1);

  // 切换页数
  // index 就是每次专辑的开头那个专辑的index
  const onPageChange = (e, pageSize) => {
    let index = 35*(e-1)
    setPage(e)
    getTopAlbums(pageSize, index).then(res => {
      setAllAlubms(res.albums)
    })
  }


  // 热门歌曲
  useEffect(() => {
    getHotAlbums().then(res => {
      setNewAlbums(res.albums)
    })
  }, []);

  // 全部歌碟
  useEffect(() => {
    getTopAlbums(35, 0).then(res => {
      console.log(res.albums);
      setAllAlubms(res.albums)
    })
  }, []);



  return (
    <HotAlbumWrapper className='wrap-v2'>
      <ThemeHeaderAlbum title='热门新碟' />
      <div className="newAlbum">
        {
          newAlbums && newAlbums.slice(0, 10).map((item, index) => {
            return (
              <div className="item">
                <AlbumCover
                  info={item}
                  size={130}
                  width={153}
                  bgp="-845px"
                />
              </div>
            )
          })
        }
      </div>

      <ThemeHeaderAlbum title='全部新碟' keywords={['全部', '华语', '欧美', '韩国', '日本']} />

      <div className="newAlbum">
        {
          allAlubms && allAlubms.slice(0, 35).map((item, index) => {
            return (
              <div className="item">
                <AlbumCover
                  info={item}
                  size={130}
                  width={153}
                  bgp="-845px"
                />
              </div>
            )
          })
        }
      </div>
      <Paginations 
      currentPage={page} 
      total={15 * 35} 
      onPageChange={e => onPageChange(e)} />
    </HotAlbumWrapper>
  )
})

export default HotAlbum