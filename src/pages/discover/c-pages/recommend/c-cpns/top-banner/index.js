import React, { memo, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// 请求轮播图图片
import { getTopBannerAction } from '../../../recommend/store/actionCreators'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { TopBannerWrapper, TopBannerLeft, TopBannerRight, TopBannerControl } from './style'


const TopBanner = memo((props) => {
    // 轮播图当前下标
    const [currentIndex, setCurrentIndex] = useState(7);

    // react-redux hooks 取得轮播图数据
    const { topBanners } = useSelector(state => (
        {
            topBanners: state.getIn(["recommend", "topBanners"])
        }
    ), shallowEqual)
    const dispatch = useDispatch();

    // 请求轮播图数据
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    // 将轮播图下标带入currentIndex
    const bannerChange = useCallback((index) => {
        if (index == -1) {
            index = 7
        }
        setCurrentIndex(index);
    }, []);

    // 其他业务逻辑
    // 取得对应轮播图的图片
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        // props传入css样式进行加工模糊
        <TopBannerWrapper bgImage={bgImage}>
            <div className='wrap-v2 banner' >
                <TopBannerLeft>
                    {/* 轮播图 */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // onSwiper={(swiper) => {console.log(swiper.activeIndex)}}
                        onSlideChange={(swiper) => {
                            // 获取每一个图片下标，loop数值会变0-8,1-9进行数据加工
                            bannerChange((swiper.activeIndex - 1) % 8)
                        }}
                        // 小圆圈
                        pagination={{
                            clickable: true,
                        }}
                        // 左右按钮
                        navigation={{
                            enabled: true,
                            nextEl: '.button-next1',
                            prevEl: '.button-prev1',
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <SwiperSlide className="banner-item" key={index}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </TopBannerLeft>
                {/* 下载图 */}
                <TopBannerRight>
                </TopBannerRight>
                {/* 左右点击按钮 */}
                <TopBannerControl>
                    <button className="button-prev1 btn left" ></button>
                    <button className="button-next1 btn right" ></button>
                </TopBannerControl>
            </div>
        </TopBannerWrapper>
    )
})

export default TopBanner

