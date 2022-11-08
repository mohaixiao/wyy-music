import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  margin: 20px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0px 5px 0px;
    border-bottom: 1px solid #ccc;
  }
  .inSinger {
    display: flex;
    margin-top: 20px;
    width: 200px;
    height: 62px;
    cursor: pointer;
    .desc {
      display: flex;
      flex-flow: column;
      padding: 5px 0 5px 5px;
      justify-content: space-around;
      width: 148px;
      border: 1px solid #ccc;
      border-left: 0px;
    }
    &:hover {
      background-color: #ccc;
    }
  }
  .button {
    display: inline-block;
    border-radius: 4px;
    height: 31px;
    line-height: 31px;
    width: 200px;
    border: 1px solid gray;
    box-shadow: #ccc;
    margin-top:20px;
    line-height: 32px;
    text-align: center;
    a:hover {
    text-decoration: none;
    }
    &:hover {
     border: 1px solid #D3D3D3;
    }
    .name {
      font-weight: 700;
      color:black;
    }
  }
`;
