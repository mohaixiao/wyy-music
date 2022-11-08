import React, { memo } from 'react'
import PropTypes from 'prop-types';

import { ThemeHeaderRemWrapper } from './style'

const ThemeHeaderCommentTitle = memo((props) => {
  const { title, keywords, totals } = props;

  return (
    <ThemeHeaderRemWrapper>
      <div className='left'>
        <h3 className='title'>评论</h3>
        <div className="keyword">
          共88条评论
        </div>
      </div>
    </ThemeHeaderRemWrapper>
  )
})

ThemeHeaderCommentTitle.propTypes = {
  title: PropTypes.string.isRequired, // 大标题
  keywords: PropTypes.string
}
ThemeHeaderCommentTitle.defaultProps = {
  keywords: '' // 抬头小标题
}

export default ThemeHeaderCommentTitle