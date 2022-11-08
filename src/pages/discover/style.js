import styled from "styled-components";

export const DiscoverWraper = styled.div`
/* 拉满红色背景 */
  .top {
    height: 34px;
    background-color: #c20c0c;
  }
`;
// 布局导航
export const TopMenu = styled.div`
  display: flex;
  position: relative;
  top: -4px;
  left: 120px;

  .item {
    position: relative;
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;
    }
    /* 经过背景，点击背景 */
    a:hover,
    a.active {
      text-decoration: none;
      background-color: #9b0909;
      border-radius: 20px;
    }
    /* 歌单右上角R LOGO */
    .icon {
      position: absolute;
      display: inline-block;
      width: 8px;
      height: 8px;
      background-size: cover;
      top: 8px;
      left: 55px;
      background-image: url(https://s2.music.126.net/style/web2/img/white-r-icon@3x.png?3e0b5df37a140a7e845cb225e7fb558f);
    }
  }
`;
