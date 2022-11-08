import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  /* 展示按钮 */
  margin: 0 -40px;

  /* 按钮箭头 */
  .arrow {
    width: 20px;
    height: 30px;
    background-image: url(${require("@/assets/img/radio_slide.png")});
    cursor: pointer;
  }

  /* 左按钮 */
  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }
  /* 右按钮 */
  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }
`

export const CategoryContent = styled.div`
  flex: 1;
  width: 900px;

  .category-page {
    display: flex !important;
    flex-wrap: wrap;
    padding-bottom: 20px;

    /* 每一个电台 */
    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 15px;
      width: 70px;
      height: 70px;
      font-size: 12px;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
      border: 2px solid transparent;

      :hover {
        background-color: #eee;
      }
      /* 点击 */
      &.active {
        color: #C20C0C;
        border: 2px solid #d35757;

        .image {
          background-position: -48px 0;
        }
      }
    }
  }

  /* 重写小圆点 */
  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      button {
        background-color: #C20C0C;
      }
    }
  }
`


// 电台图片
export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.imgUrl});
`