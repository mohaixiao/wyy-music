import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getInSingersAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import { SettleSingerWrapper } from './style'

const SettleSinger = memo((props) => {

    const { inSingers } = useSelector((state) => ({
        inSingers: state.getIn(['recommend', 'inSingers'])
    }), shallowEqual)
    const dispath = useDispatch()

    useEffect(() => {
        dispath(getInSingersAction())
    }, [dispath])

    return (
        <SettleSingerWrapper>
            <div className='header'>
                <h4>入驻歌手</h4>
                <a href="#">查看全部 ></a>
            </div>
            {
                inSingers && inSingers.slice(0, 5).map((item, index) => {
                    return (
                        <div className='inSinger'>
                            <img src={getSizeImage(item.picUrl, 62)} alt="" />
                            <div className='desc'>
                                <h3>{item.name}</h3>
                                <p>{item.alias[0]}</p>
                            </div>
                        </div>
                    )
                })
            }
            <div className='button'>
                <a  href="https://music.163.com/st/musician" target="_blank" rel="noopener noreferrer">
                    <p className='name'>申请成为网易音乐人</p>
                </a>
            </div>
        </SettleSingerWrapper>
    )
})

export default SettleSinger