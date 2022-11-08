import { Map } from 'immutable'

import * as actionTypes from "./constants";

const defaultState = Map({
    playList: [
        {
            "name": "有何不可",
            "id": 167876,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5771,
                    "name": "许嵩",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600902000007916021",
            "fee": 8,
            "v": 49,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 16953,
                "name": "自定义",
                "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
                "tns": [],
                "pic_str": "18590542604286213",
                "pic": 18590542604286212
            },
            "dt": 241840,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9675799,
                "vd": -21099
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5805497,
                "vd": -18400
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3870346,
                "vd": -16900
            },
            "a": null,
            "cd": "1",
            "no": 3,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "mst": 9,
            "cp": 14026,
            "rtype": 0,
            "rurl": null,
            "publishTime": 1231516800000
        },
        {
            "name": "雅俗共赏",
            "id": 411214279,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5771,
                    "name": "许嵩",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 31,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 34749138,
                "name": "青年晚报",
                "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
                "tns": [],
                "pic": 3431575794705764
            },
            "dt": 249621,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9987177,
                "vd": -22200
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5992323,
                "vd": -19600
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3994896,
                "vd": -17800
            },
            "a": null,
            "cd": "1",
            "no": 2,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 5302271,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 14026,
            "publishTime": 1461723397683
        }, {
            "name": "无数",
            "id": 1982706733,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5781,
                    "name": "薛之谦",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 151839715,
                "name": "无数",
                "picUrl": "https://p2.music.126.net/z0b7uhQmjXdFqkgBTSpsfA==/109951167891177817.jpg",
                "tns": [],
                "pic_str": "109951167891177817",
                "pic": 109951167891177820
            },
            "dt": 330521,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 13223085,
                "vd": -58520,
                "sr": 48000
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 7933869,
                "vd": -55980,
                "sr": 48000
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 5289261,
                "vd": -54449,
                "sr": 48000
            },
            "sq": {
                "br": 955203,
                "fid": 0,
                "size": 39464374,
                "vd": -58570,
                "sr": 48000
            },
            "hr": {
                "br": 1722918,
                "fid": 0,
                "size": 71182661,
                "vd": -58507,
                "sr": 48000
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 536870912,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 3,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "mst": 9,
            "cp": 2708760,
            "rtype": 0,
            "rurl": null,
            "publishTime": 0
        }
    ],
    sequence: 0, // 0 循环 1 随机 2 单曲
    currentSongIndex: 0,
    currentSong: {
        "name": "有何不可",
        "id": 167876,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000007916021",
        "fee": 8,
        "v": 49,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 16953,
            "name": "自定义",
            "picUrl": "https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
            "tns": [],
            "pic_str": "18590542604286213",
            "pic": 18590542604286212
        },
        "dt": 241840,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9675799,
            "vd": -21099
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5805497,
            "vd": -18400
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3870346,
            "vd": -16900
        },
        "a": null,
        "cd": "1",
        "no": 3,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 0,
        "single": 0,
        "noCopyrightRcmd": null,
        "mv": 0,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 14026,
        "publishTime": 1231516800000
    },
    currentLyrics: [],
    simiPlaylist: [],
    simiSongs: [],
    currentLyricIndex: -1
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index);
        case actionTypes.CHANGE_LYRICS:
            return state.set("currentLyrics", action.lyrics);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence);
        case actionTypes.CHANGE_SIMI_PLAYLIST:
            return state.set("simiPlaylist",action.simiPlaylist)
        case actionTypes.CHANGE_SIMI_SONGS:
            return state.set("simiSongs",action.simiSongs)        
        default:
            return state;
    }
}

export default reducer;