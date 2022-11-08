import styled from "styled-components";

export const PlayerInfoWrapper = styled.div`
  display: flex;
  margin: 35px 35px;
  width: 640px;
`;

export const PlayerInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .left-top {
    position: relative;
    width: 206px;
    height: 205px;
    background-position: -140px -580px;
    .image {
      position: absolute;
      top: 38px;
      left: 38px;
      border-radius: 50%;
    }
  }
  .left-bottom {
    margin-top: 20px;
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
    }
    .button {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`;

export const PlayerInfoRight = styled.div`
  margin-left: 20px;
  .header {
    display: flex;
    align-items: center;
    .header-icon {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }
    .title {
      padding-left: 6px;
      font-size: 24px;
    }
  }
  .singer {
    margin-top: 5px;
    em {
      color:#999;
    }
    a {
      color: #0c73c2;
    }
  }
  .album {
    margin-top: 5px;
    em {
      color:#999;
    }
    a {
      color: #0c73c2;
    }
  }
  .lyric {
    padding: 30px 0 50px;
    .lyric-info {
      .text {
        margin: 6px 0;
      }
    }
    .lyric-control {
      position: relative;
      color:#0c73c2;
      background-color: #fff;
      text-decoration: underline;
      cursor: pointer;
    }
    i {
      position: absolute;
      width: 11px;
      height: 8px;
      right: -8px;
      top: 6px;
      background-position: ${props => props.isSpread ? "-45px" : "-65px"} -520px;
    }
  }
`;
