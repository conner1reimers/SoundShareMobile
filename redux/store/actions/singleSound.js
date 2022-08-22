
import {FETCH_SINGLE_SOUND} from './actionTypes'

export const fetchSingleSound = (id) => {
    return {
        type: FETCH_SINGLE_SOUND,
        sid: id
    }
}
