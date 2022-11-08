import styled from "styled-components";

export const ThemeHeaderRemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding: 0 10px 4px 0px;
  width: 900px;
  margin: 0 auto;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;
  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 24px;
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
`;
