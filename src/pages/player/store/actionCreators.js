import * as actionTypes from "./constants";


import { getSongDetail, getLyric, getSimiPlaylist, getSimiSong } from '@/services/player';

import { getRandomNumber } from '@/utils/math-utils';
import { parseLyric } from '@/utils/parse-lyric';



// 更改当前歌曲
const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
});

// 更改歌词
const changLyricListAction = (lyrics) => ({
    type: actionTypes.CHANGE_LYRICS,
    lyrics
})

// 更改歌单
const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

// 更改当前歌曲下标
const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

// 对外暴露的action 修改循环，随机，顺序的状态
export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
});

// 改变播放方式和请求歌词
export const changeCurrentIndexAndSongAction = (Tag) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"]);
        const sequence = getState().getIn(["player", "sequence"]);
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

        switch (sequence) {
            case 1: // 随机播放
                let randomIndex = getRandomNumber(playList.length);
                while (randomIndex === currentSongIndex) {
                    randomIndex = getRandomNumber(playList.length);
                }
                currentSongIndex = randomIndex;
                break;
            default: // 顺序播放
                currentSongIndex += Tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0; // 超过playList.length变第一首
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1; // 负数就变最后一个playList.length -1
        }
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));

        // 3.请求歌词
        dispatch(getLyricAction(currentSong.id));
    }
}

// 添加歌曲
export const addSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 1.根据id去查找playlist中是否已经有该歌曲
        const playList = getState().getIn(["player", "playList"]);
        const songIndex = playList.findIndex(song => song.id === ids);

        // 2.判断是否找到歌曲
        if (songIndex !== -1) { // 查找歌曲
            alert("已经添加该歌曲")
        } else { // 未查找到歌曲 
            // 请求歌曲数据
            getSongDetail(ids).then(res => {
                const song = res.songs && res.songs[0];
                if (!song) {
                    return;
                }
                // 1.将最新请求的歌曲添加到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);
                // 2. 更新redux中的值
                dispatch(changePlayListAction(newPlayList)); // 更新新playlist
                // 3.请求歌词
                dispatch(getLyricAction(song.id));
            })
        }
    }
}

// 请求歌曲
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 1.根据id去查找playlist中是否已经有该歌曲
        const playList = getState().getIn(["player", "playList"]);
        const songIndex = playList.findIndex(song => song.id === ids);

        // 2.判断是否找到歌曲
        if (songIndex !== -1) { // 查找歌曲
            dispatch(changeCurrentSongAction(songIndex)); // 更新歌曲下标
            const song = playList[songIndex]; // 取得对应歌曲
            dispatch(changeCurrentSongAction(song)); // 更新歌曲
            // 请求歌词
            dispatch(getLyricAction(song.id));
        } else { // 未查找到歌曲 
            // 请求歌曲数据
            getSongDetail(ids).then(res => {
                const song = res.songs && res.songs[0];
                if (!song) {
                    return;
                }
                // 1.将最新请求的歌曲添加到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);
                // 2. 更新redux中的值
                dispatch(changePlayListAction(newPlayList)); // 更新新playlist
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1)); // 更新当前播放的歌曲下标
                dispatch(changeCurrentSongAction(res.songs[0])) // 更新当前歌曲
                // 3.请求歌词
                dispatch(getLyricAction(song.id));
            })
        }
    }
}

// 获取歌词
export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric;
            const lyricList = parseLyric(lyric);
            dispatch(changLyricListAction(lyricList));
        })
    }
}

// 改变相似歌单
const changeSimiPlaylistAction = (simiPlaylist) => ({
    type: actionTypes.CHANGE_SIMI_PLAYLIST,
    simiPlaylist
})

// 获取相似歌单
export const getSimiPlaylistAction = (id) => {
    return dispatch => {
        getSimiPlaylist(id).then(res => {
            dispatch(changeSimiPlaylistAction(res.playlists))
        })
    }
}
// 改变相似歌曲
const changeSimiSongsAction = (simiSongs) => ({
    type: actionTypes.CHANGE_SIMI_SONGS,
    simiSongs
})

// 获取相似歌曲
export const getSimiSongsAction = (id) => {
    return dispatch => {
        getSimiSong(id).then(res => {
            dispatch(changeSimiSongsAction(res.songs))
        })
    }
}