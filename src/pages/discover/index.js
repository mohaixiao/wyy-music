import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

// 小标题导航
import { dicoverMenu } from '@/common/local-data'

import { DiscoverWraper, TopMenu } from './style'

const Discover = memo((props) => {
    const { route } = props;

    return (
        <div>
            <DiscoverWraper>
                <div className='top'>
                    <TopMenu className="wrap-v2">
                        {
                            dicoverMenu.map((item, index) => {
                                return (
                                    <div className='item' key={item.title}>
                                        <NavLink to={item.link}>{item.title}</NavLink>
                                        {index == '2' ? <i className='icon'></i> : ""}
                                    </div>
                                )
                            })
                        }
                    </TopMenu>
                </div>
            </DiscoverWraper>
            {/* 子路由 */}
            {renderRoutes(route.routes)} 
        </div>
    )
})

export default Discover