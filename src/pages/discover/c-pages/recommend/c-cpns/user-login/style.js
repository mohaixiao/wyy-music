import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  /* 登录 */
  .login {
    display: flex;
    flex-flow: column;
    height: 126px;
    padding-top: 0;
    background-position: 0 0;
    .sentence {
      margin: 20px;
    }
    /* 按钮 */
    .button {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;
      &:hover {
        background-position: -110px -195px;
      }
    }
  }
`;
