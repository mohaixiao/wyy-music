import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store'
import { reducer as songsReducer } from '../pages/discover/c-pages/songs/store'
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store'
import { reducer as djradioReducer } from '../pages/discover/c-pages/djradio/store'
import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store";

const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    songs: songsReducer,
    ranking: rankingReducer,
    djradio:djradioReducer,
    artist:artistReducer
})

export default cReducer;