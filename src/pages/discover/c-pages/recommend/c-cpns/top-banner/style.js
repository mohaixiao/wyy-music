import styled from "styled-components";

export const TopBannerWrapper = styled.div`
/* 图片模糊处理 */
  background: url(${props => props.bgImage}) center center/6000px;

  /* 轮播图banner */
.banner {
  height: 270px;
  background-color: red;

  display: flex;
  position: relative;
}
`;

// 轮播图
export const TopBannerLeft = styled.div`
  width: 730px;
  .swiper-pagination-bullet-active {
    background-color: red;
  }
  .banner-item {
    height: 270px;
    /* 剪切超出的图片部分 */
    overflow: hidden;
    .image {
      width: 100%;
    }
  }
`;

// 下载客户端图片+外部链接
export const TopBannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`;

// 左右点击按钮
export const TopBannerControl = styled.div`
/* 统一布局按钮位置竖直居中 */
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);

  /* 按钮btn使用精灵图，透明处理 */
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    // 光标属性
    cursor: pointer;

    /* 加阴影 */
    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  /* 设置定位+精灵图位置 */
  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
