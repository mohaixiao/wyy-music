import React, { memo } from 'react'

import ThemeHeaderCommentTitle from '../../../../components/theme-header-comment-title'
import ThemeHeaderComments from '../../../../components/theme-header-comment'

const PlayerComment = memo(() => {
  return (
    <div>
      <ThemeHeaderCommentTitle />
      <ThemeHeaderComments />
    </div>
  )
})

export default PlayerComment