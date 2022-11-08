import styled from "styled-components";

export const HotAnchorWrapper = styled.div`
  .hot-anchor {
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
  .hotAnchors {
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
    cursor: pointer;
    .desc {
      width: 170px;
      margin-left: 5px;
      display: flex;
      flex-flow: column;
      padding: 5px 0 5px 5px;
      justify-content: space-around;
      .name {
      color: #000;
      white-space: nowrap; // 文本不换行
      text-overflow: ellipsis; // ...
      overflow: hidden; // 多余的隐藏
    }
    }
  }
`;
