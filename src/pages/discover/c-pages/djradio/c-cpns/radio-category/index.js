import React, { useEffect, useRef, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import classnames from 'classnames';

import { Carousel } from 'antd';

import {
    getRadioCategories,
    changeCurrentIdActio
} from '../../store/actionCreators'

import {
    CategoryWrapper,
    CategoryContent,
    CategoryItemImage
} from "./style";

const PAGE_SIZE = 18;

const RadioCategory = memo(() => {

    // reduc-hooks
    const {
        categories,
        currentId,
    } = useSelector(state => ({
        categories: state.getIn(["djradio", "categories"]),
        currentId: state.getIn(["djradio", "currentId"])
    }), shallowEqual)
    const dispatch = useDispatch();

    // hooks
    useEffect(() => {
        dispatch(getRadioCategories());
    }, [dispatch]);
    const carouselRef = useRef();

    // data handle
    const page = Math.ceil(categories.length / PAGE_SIZE) || 1;

    // handle function 取得每一页的图片数组末尾
    function getSize(index) {
        return index * PAGE_SIZE < categories.length ? index * PAGE_SIZE : categories.length;
    }


    return (
        <CategoryWrapper>
            {/* 按钮 */}
            <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
            <CategoryContent>
                <Carousel dots={{ className: "dots" }} ref={carouselRef}>
                    {
                        Array(page).fill(0).map((_, index) => {
                            return (
                                <div key={index} className="category-page">
                                    {
                                        categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item, indey) => {
                                            return (
                                                <div key={item.id}
                                                    // 点击图片改变当前id
                                                    onClick={e => dispatch(changeCurrentIdActio(item.id))}
                                                    className={classnames("category-item", { "active": currentId === item.id })}>
                                                    <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                                                    <span>{item.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>
            </CategoryContent>
            {/* 按钮 */}
            <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
        </CategoryWrapper>
    )
})

export default RadioCategory