import styled from 'styled-components';

export const PlayerbarWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
    border-right: 1px solid #ccc;
  }
`

export const PlayerbarLeft = styled.div`
  width: 710px;
`

export const PlayerbarRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`
