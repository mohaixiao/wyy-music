import React, { memo } from 'react'

// 头部title和link
import { headerLinks } from '@/common/local-data';
// 跳转Link
import { NavLink } from 'react-router-dom'
// 引入样式
import { HeaderWraper, HeaderLeft, HeaderRight } from './style'

const AppHeader = memo(() => {

    // 业务代码
    // 前3个导航是路由链接，后面是a链接
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className='sprite_01 icon'></i>
                </NavLink>
            )
        } else {
            return (
                <a href={item.link} target="_blank">{item.title}</a>
            )
        }
    }

    // jsx
    return (
        <HeaderWraper>
            <div className='content wrap-v1'>
                <HeaderLeft>
                    {/* logo带a链接（精灵图） */}
                    <a href="#/" className='logo sprite_01'>网易云音乐</a>
                    {/* 大导航 */}
                    <div className='select-list'>
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                        {/* <i className='hot'></i> */}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    {/* 搜索框 */}
                    <div className='search'>
                        <i className='search-icon'></i>
                        <input type='text' placeholder="音乐/视频/电台/用户"></input>
                    </div>
                    {/* 按钮 */}
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>
            </div>
            {/* 底部红线 */}
            <div className='divider'></div>
        </HeaderWraper>
    )
})

export default AppHeader