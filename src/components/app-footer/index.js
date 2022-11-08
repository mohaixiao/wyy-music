import React, { memo, Fragment } from 'react'


import { footerLinks, footerImages } from "@/common/local-data";

import { AppFooterWrapper, FooterLeft, FooterRight } from './style'

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className='left'>
          {/* 小标题导航 */}
          <div className='link'>
            {
              footerLinks.map((item) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel='noopener norferrer'>{item.title}</a>
                    {item.title != footerLinks[footerLinks.length - 1].title ? <span className='line'>|</span> : ''}
                  </Fragment>
                )
              })
            }
          </div>
          {/* 其他内容1 */}
          <div className='copyright'>
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：<a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" target="_blank">浙网文[2021] 1186-054号</a></span>
          </div>
          {/* 其他内容2 */}
          <div className='report'>
            <span><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤B2-20090191-18  工业和信息化部备案管理系统网站 </a></span>
            <span> <i className='police-icon'></i><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank">浙公网安备 33010902002564号</a></span>
          </div>
          {/* 其他内容3 */}
          <div className='info'>
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span>监督举报邮箱：51jubao@service.netease.com</span>
          </div>
        </FooterLeft>
        <FooterRight className='right'>
          {/* 使用精灵图 */}
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title"></span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter