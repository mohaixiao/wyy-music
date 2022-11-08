import styled from "styled-components";

export const RankingTopWrapper = styled.div`
  padding: 25px 0;
  width: 240px;
  border-right: 1px solid #ccc;
  // 榜单标题
  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
  }

  // 榜单
  .item {
    height: 62px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    /* 点击或经过 */
    &:hover,
    &.active {
      background-color: #e6e6e6;
    }

    img {
      width: 40px;
      height: 40px;
    }

    /* 右侧标题 */
    .info {
      margin-left: 10px;

      .name {
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: normal;
        white-space: nowrap;
        width: 150px;
      }

      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`;
