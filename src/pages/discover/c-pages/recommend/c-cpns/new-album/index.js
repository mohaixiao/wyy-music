import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// newAlbum 新碟上架
import { getNewAlbumAction } from '../../store/actionCreators';
// 限制请求的数10
import { HOT_ALBUM_LIMIT } from '@/common/contants.js'

// 抬头标题组件复用
import ThemeHeaderRem from '@/components/theme-header-rcm'
// item 新碟
import AlbumCover from '../../../../../../components/album-cover';


import { NewAlbumWrapper } from './style'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewAlbum = memo(() => {

    // react-redux hooks
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // react hooks
    useEffect(() => {
        dispatch(getNewAlbumAction(HOT_ALBUM_LIMIT));
    }, [dispatch]);


    return (
        <NewAlbumWrapper>
            <ThemeHeaderRem title={'热门新碟'}></ThemeHeaderRem>
            <div className="album content">
                {/* 左侧按钮 */}
                <button className="button-prev arrow arrow-left sprite_02"></button>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={28}
                    slidesPerGroup={5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={{
                        enabled: true,
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        newAlbums && newAlbums.map((item, index) => {
                            return (
                                <div className="page">
                                    <SwiperSlide key={index}>
                                        <AlbumCover
                                            info={item}
                                            size={100}
                                            width={118}
                                            bgp="-570px"
                                        ></AlbumCover>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }
                </Swiper>
                {/* 右侧按钮 */}
                <button className="button-next arrow arrow-right sprite_02"></button>
            </div>
        </NewAlbumWrapper >
    )
})

export default NewAlbum