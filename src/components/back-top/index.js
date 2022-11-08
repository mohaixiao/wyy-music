import React, { memo } from 'react'

import { BackTopWrapper } from './style'

const BackTop = memo(() => {

    // 回到顶部
    const scrollToPosition = (distance, time) => {
        // st为函数执行时滚动条到文档顶部的距离
        const st = document.documentElement.scrollTop
        // 需要滑动的距离
        const need = st - distance
        // 循环时间,值越小越耗性能
        const loopTime = 20
        // 循环次数
        let loopCount = time / loopTime
        // 每次步进的距离
        const step = need / loopCount

        const scrollTimer = setInterval(() => {
            if (loopCount > 0) {
                // 此项设置是为了精准定位
                loopCount !== 1 ? document.documentElement.scrollTop -= step : document.documentElement.scrollTop = distance
                loopCount--
            } else {
                clearInterval(scrollTimer)
            }
        }, loopTime)

    }

    // 回到顶部
    const backToTop = () => {
        scrollToPosition(0, 200)
    }

    return (
        <BackTopWrapper>
            <a className='sprite b-top' onClick={e => backToTop(e)}>回到顶部</a>
        </BackTopWrapper>

    )
})

export default BackTop