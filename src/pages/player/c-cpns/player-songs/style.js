import styled from "styled-components";

export const PlayerSongsWrapper = styled.div`
  h4.title {
    font-weight: 700;
    padding-bottom: 10px;
  }

`;

export const Songlist = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 16px;

  .item {
    height: 70px;
    img {
      float: left;
      margin-right: 10px;
    }
  }
  .item > .right {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    p.title {
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

export const Simisongs = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 16px;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .play {
      margin-right: 16px;
      display: inline-block;
      width: 10px;
      height: 11px;
      background-position: -69px -455px;
    }
    .add {
      display: inline-block;
      width: 10px;
      height: 11px;
      background-position: -87px -454px;
    }
  }
`;
