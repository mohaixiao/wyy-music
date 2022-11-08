import styled from "styled-components";

export const LoadWrapper = styled.div`
  h4.title {
    font-weight: 700;
    padding-bottom: 10px;
  }
  margin-bottom: 10px;
`;

export const Loads = styled.div`
  height: 65px;
  margin-bottom: 10px;
  background-position: 0 -377px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .iphone {
    display: inline-block;
    margin-top: 13px;
    margin-left: 1px;
    width: 42px;
    height: 48px;
    text-indent: -9999px;
    &:hover {
        background-position: 0px -472px;
    }
  }
  .pc {
    display: inline-block;
    margin-top: 12px;
    margin-left: 5px;
    width: 60px;
    height: 48px;
    text-indent: -9999px;
    &:hover {
        background-position: -72px -472px;
    }
  }
  .android {
    display: inline-block;
    margin-top: 12px;
    margin-left: 1px;
    width: 42px;
    height: 48px;
    text-indent: -9999px;
    &:hover {
        background-position: -158px -472px;
    }
  }
`;
