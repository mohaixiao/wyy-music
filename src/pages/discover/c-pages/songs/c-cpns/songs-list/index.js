import React, { memo, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getSongList } from '../../store/actionCreators'

import SongsCover from '../../../../../../components/songs-cover';
import Paginations from '../../../../../../components/pagination'

import { SongsListWrapper } from './style'

const SongsList = memo(() => {
    // redux hooks
    const { categorySongs } = useSelector(state => ({
        categorySongs: state.getIn(["songs", "categorySongs"]),
    }), shallowEqual);
    const dispatch = useDispatch();

    const { playlists } = categorySongs;
    const [page, setPage] = useState(1);

    // 切换页数
    // index 就是每次专辑的开头那个专辑的index
    const onPageChange = (e, pageSize) => {
        let index = 35 * (e - 1)
        setPage(e)
        dispatch(getSongList(e))
    }

    return (
        <SongsListWrapper>
            {
                playlists && playlists.map((item, index) => {
                    return (
                        <div className="item">
                            <SongsCover
                                picUrl={item.coverImgUrl}
                                name={item.name}
                                playCount={item.playCount}
                                nickname={item.creator.nickname}
                            />
                        </div>
                    )
                })
            }
            <div className='paginations'>
                <Paginations
                    currentPage={page}
                    total={19 * 35}
                    onPageChange={e => onPageChange(e)} />
            </div>
        </SongsListWrapper>
    )
})

export default SongsList