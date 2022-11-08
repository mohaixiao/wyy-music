import styled from "styled-components";

export const HotAlbumWrapper = styled.div`
    // 2侧边框
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding-top: 40px;

    // flex 专辑布局
    .newAlbum {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 900px;
        margin-left: 51px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .item {
            width: 156px;
        }
    }
`