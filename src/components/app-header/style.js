import styled from "styled-components";

export const HeaderWraper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px; // 字体样式
  color: #fff; // 字体颜色
  // top栏目
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  // 底部红线
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  // 网易云logo
  .logo {
    display: block;
    height: 69px;
    width: 176px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  // 跳转标签
  .select-list {
    display: flex;
    position: relative;
    line-height: 70px;
    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      // 标签点击和点击后样式
      &:hover a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      // icon
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }

  // hot 定位+精灵图
  /* .hot {
    position: absolute;
    display: block;
    top: 21px;
    left: 505px;
    width: 28px;
    height: 19px;
    background-position: -190px 0;
    background-image: url(${require("@/assets/img/sprite_01.png")});
  } */
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;



  .search {
    position: relative;
    width: 158px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #666;
    border-radius: 16px;
    background-color: #fff;
    input {
      padding-left: 22px;
      background-color: transparent;
      &::placeholder {
        font-size: 12px;
      }
    }

    .search-icon {
    position: absolute;
    display: block;
    top: 8px;
    left: 7px;
    width: 16px;
    height: 16px;
    background-position: -10px 107px;
    background-image: url(${require("@/assets/img/sprite_01.png")});
  }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`;
