import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
  /* 小标题导航 */
  .link {
    a {
      color: #999;
    }
    /* 竖线 */
    .line {
      margin: 0 10px;
      color: #999;
    }
  }
  /* 其他内容 */
  .copyright {
    span {
      margin-right: 15px;
    }
  }
  /* 警徽 */
  .police-icon {
    width: 14px;
    height: 14px;
    background: url("https://s2.music.126.net/style/web2/img/3rd/police.png?0111cb792e6c2722a021f1a53bc01cc9")
      no-repeat;
    background-size: cover;
    display: inline-block;
    margin-right: 2px;
    vertical-align: -2px;
  }
  /* 其他内容 */
  .info {
    span {
      margin-right: 15px;
    }
  }
`;

// 使用精灵图
export const FooterRight = styled.div`
  display: flex;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    /* 导航图标 */
    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 552px;
    }
    :nth-child(1) .link {
      background-position: -60px 95px;
    }
    :nth-child(2) .link {
      background-position: -60px -101px;
    }
    :nth-child(3) .link {
      background-position: 0 0px;
    }
    :nth-child(4) .link {
      background-position: -60px -50px;
    }
    :nth-child(5) .link {
      background-position: 0 -100px;
    }
    /* 下面标题 */
    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 14px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 139px;
    }
    :nth-child(1) .title {
      background-position: 0px -106px;
      width: 72px;
      margin-top: 4px;
    }
    :nth-child(2) .title {
      background-position: -0px -90px;
      margin-top: 6px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
      margin-top: 7px;
    }

    :nth-child(4) .title {
      background-position: 0 -55px;
      margin-top: 7px;
    }

    :nth-child(5) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`;
