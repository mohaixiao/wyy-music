import React, { memo } from 'react'
import PropTypes from 'prop-types';

import { ThemeHeaderRemWrapper } from './style'

const ThemeHeaderAlbum = memo((props) => {
  const { title, keywords } = props;

  return (
    <ThemeHeaderRemWrapper>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item">
                  <a href="item">{item}</a>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </ThemeHeaderRemWrapper>
  )
})

ThemeHeaderAlbum.propTypes = {
  title: PropTypes.string.isRequired, // 大标题
  keywords: PropTypes.array
}

ThemeHeaderAlbum.defaultProps = {
  keywords: [] // 抬头小标题
}


export default ThemeHeaderAlbum



