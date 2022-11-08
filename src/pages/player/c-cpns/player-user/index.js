import React, { memo } from 'react'

import { PlayerUsersWrapper, Userlist } from './style'

const PlayerUser = memo(() => {
    return (
        <PlayerUsersWrapper>
            <h4 className='title'>用户wiki</h4>
            <Userlist>
                <div>
                    <img class="icon" src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138582886/9567/5afa/307c/a6ba8934ef3b36208786e4445e054e04.png" />
                    <a href="#"><span>补充或修改歌曲资料</span></a>
                </div>
                <div>
                    <img class="icon" src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138582886/9567/5afa/307c/a6ba8934ef3b36208786e4445e054e04.png" />
                    <a href="#"><span>用户wiki任务中心</span></a>
                </div>
            </Userlist>
        </PlayerUsersWrapper>
    )
})

export default PlayerUser