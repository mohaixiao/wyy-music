import styled from "styled-components";

export const AlbumWrapper = styled.div`
  width: ${(props) => props.width + "px"};
  // 处理每一个歌单的间距
  margin: 0 -12px;
  .album-image {
    // 单个album
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;
    // 图片
    img {
        width: ${(props) => props.size + 'px'};
        height: ${(props) => props.size + 'px'};
    }
    // 遮罩层
    .cover {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: 0 ${props => props.bgp};
        text-indent: -9999px;
    }
}
// 标题
    .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap; // 文本不换行
      text-overflow: ellipsis; // ...
      overflow: hidden; // 多余的隐藏
    }
// 作者
    .artist {
      color: #666;
    }
  }
`
