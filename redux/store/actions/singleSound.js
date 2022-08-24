
import {FETCH_SINGLE_SOUND, SET_SINGLESOUND} from './actionTypes'

export const fetchSingleSound = (id) => {
    return {
        type: FETCH_SINGLE_SOUND,
        payload: id
    }
}

export const setSingleSound = (sound) => {
    return {
        type: SET_SINGLESOUND,
        payload: sound
    }
}