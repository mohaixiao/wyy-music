import styled from "styled-components";

export const ThemeHeaderRemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  width: 640px;
  margin: 0 auto;
  border-bottom: 2px solid #c10d0c;
  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }
    .keyword {
      display: flex;
      align-items: center;
      .item {
        .divider {
          padding: 0 15px;
          color: #ccc;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      height: 12px;
      width: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
