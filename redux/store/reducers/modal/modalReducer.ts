import { Console } from "console";
import * as actionTypes from "../../actions/actionTypes";

export interface RecentSoundState {
    sounds: any,
    topLiked: any,
    topDownloaded: any,
    currentIndex: any,
    offset: any,
    refreshFinished: any,
    topLikedAll: any,
    topDownloadedAll: any,
    category: any,
    refreshTopList: any
}
const initRecSoundState: RecentSoundState = {
    sounds: null,
    topLiked: null,
    topDownloaded: null,
    currentIndex: null,
    offset: 30,
    refreshFinished: false,
    topLikedAll: null,
    topDownloadedAll: null,
    category: 'all',
    refreshTopList: {
        type: null,
        offset: 20,
        refreshFinished: false,
        msgShown: false,
    }
}

const recentSoundReducer = (state = initRecSoundState, action: any) => {
    switch (action.type) {
        
        // case 'OPEN_MODAL':
        //     return {
        //         ...state,
        //         open: true
        //     }
        
            
        default:
            return state
    }
}


export default recentSoundReducer