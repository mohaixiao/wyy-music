import styled from "styled-components";

export const SongsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 6px;
  width: 900px;
  margin: 0 auto;
`;

export const SongsHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* 标题 */
  .title {
    font-size: 24px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  /* 选择栏 */
  .select {
    position: relative;
    top: 2px;
    width: 91px;
    height: 31px;
    line-height: 31px;
    background-color: #fafafa;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    color: #0c73c2;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    }

    i {
      position: relative;
      left: 5px;
      bottom: 2px;
      display: inline-block;
      width: 8px;
      height: 5px;
      background-position: -70px -543px;
    }
  }
`;

// 热门开关
export const SongsHeaderRight = styled.div`
  .hot {
    display: inline-block;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    background-color: #c20c0c;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #aaa;
  }
`;
