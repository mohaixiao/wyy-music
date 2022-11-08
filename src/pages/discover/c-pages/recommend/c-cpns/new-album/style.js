import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  .content {
    // 整体背景框
    width: 687px;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;

    /* 左右按钮 */
    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      // 按钮和图片的间距
      margin-right: 10px;
      background-position: -260px -75px;
    }

    .arrow-right {
      margin-left: 10px;
      background-position: -300px -75px;
    }

    /* 新碟布局 */
    .album {
      width: 60px;
      height: 150px;

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
