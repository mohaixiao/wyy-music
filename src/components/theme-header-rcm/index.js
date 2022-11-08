import React, { memo } from 'react'
import PropTypes from 'prop-types';

import { ThemeHeaderRemWrapper } from './style'

const ThemeHeaderRem = memo((props) => {
    const { title, keywords } = props;

    return (
        <ThemeHeaderRemWrapper className='sprite_02'>
            <div className='left'>
                <h3 className='title'>{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <a href="item">{item}</a>
                                    <span className='divider'>|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a href="todo">更多</a>
                {/* -> logo */}
                <i className='icon sprite_02'></i>
            </div>
        </ThemeHeaderRemWrapper>
    )
})
// 大标题
ThemeHeaderRem.propTypes = {
    title: PropTypes.string.isRequired, // 大标题
    keywords: PropTypes.array
}
// 子标题
ThemeHeaderRem.defaultProps = {
    keywords: [] // 抬头小标题
}

export default ThemeHeaderRem