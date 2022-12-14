import { FETCH_SINGLE_SOUND_ASYNC, FETCH_SINGLE_SOUND_SERVER_ASYNC, SET_SINGLESOUND } from "../../actions/actionTypes"

interface SoundComment {
  com_id: string | number,
  comment_creator: number | string,
  comment_date: string | Date,
  message: string,
  user_img_path: string,
  username: string
};

interface SoundData {
  name: string,
  size: string,
  lastmodified: number
};


interface Sound {
  bpm: number,
  category: string,
  comments: Array<any>,
  creator_id: number | null,
  data: SoundData | null,
  date: Date | null,
  date_time: string,
  description: string,
  document_with_weights: string,
  downloads: number | null,
  favs: Array<any>,
  genre: string,
  id: number | null,
  img_path: string | null,
  listorder: null,
  name: string,
  path: string | null,
  reposts: Array<any>,
  tags: Array<any>,
  type: string,
  username: string,
  xtra_tags: Array<any>,
  isFavorited: Boolean
}


export interface SoundState {
  comments: Array<SoundComment>,
  offset: number,
  refreshFinished: Boolean,
  sound: Sound
}


const initState: SoundState = {
  comments: [],
  offset: 0,
  refreshFinished: false,
  sound: {
    bpm: 0,
    category: "",
    comments: [],
    creator_id: null,
    data: null,
    date: null,
    date_time: "",
    description: "",
    document_with_weights: "",
    downloads: null,
    favs: [],
    genre: "",
    id: null,
    img_path: null,
    listorder: null,
    name: "",
    path: null,
    reposts: [],
    tags: [],
    type: "",
    username: "",
    xtra_tags: [],
    isFavorited: false
  }
}



interface ActionsForUi {
  type: string,
  results: any | null,
  payload: any | null
}


type ActionTypes = ActionsForUi




const soundpageReducer = (state = initState, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_SINGLE_SOUND_SERVER_ASYNC:
      return {
        ...action.results,
        refreshFinished: true
      }
    case FETCH_SINGLE_SOUND_ASYNC:
      return {
        ...action.results,
        refreshFinished: true
      }
    case "EDIT_SOUND_NAME":
      return {
        ...state,
        sound: {
            ...state.sound,
            name: action.payload
        }
      }
    case "SINGLESOUND_UNFAV":
      const newLikes =
        state.sound && state.sound.favs.filter((el: any) => el !== action.payload.tostring());

      return {
        ...state,
        sound: {
          ...state.sound,
          favs: newLikes,
          isFavorited: false
        }
      }
    case "SINGLESOUND_NEW_FAV":
      const newFav = state.sound ? [...state.sound.favs, action.payload.tostring()] : null;
      return {
        ...state,
        sound: {
          ...state.sound,
          favs: newFav,
          isFavorited: true
        }
      }
    case "SINGLESOUND_NEW_COMMENT":
      let newComments = [action.payload, ...state.comments];
      return {
        ...state,
        comments: newComments,
        offset: state.offset + 1
      }

    case 'FETCH_MORE_COMMENTS':
      let moreComments = [...state.comments, ...action.payload];

      return {
        ...state,
        comments: moreComments,
        refreshFinish: action.payload.length < 20,
        offset: moreComments.length
      }
    case "SINGLESOUND_DELETE_COMMENT":
      const newCommentsDeleted = state.comments.filter(el => {
        return el !== state.comments[action.payload]
      })
      return {
        ...state,
        comments: newCommentsDeleted,
        offset: state.offset - 1
      }
    case "SINGLESOUND_UPDATE_COMMENT":
      let items = [...state.comments];

      let item = {
        ...items[action.payload.indx],
        message: action.payload.msg
      }

      items[action.payload.indx] = item;

      return {
        ...state,
        comments: items
      }
    case "SINGLESOUND_CHANGE_IMG":
      return {
        ...state,
        sound: {
            ...state.sound,
            img_path: action.payload
        }
      }
    case "SINGLESOUND_REMOVE_REPOST":
      const newRepostsRemoved = state.sound ? state.sound.reposts.filter((el: any) => {
        return el !== action.payload.toString()
      }) : null;

      return {
        ...state,
        sound: {
          ...state.sound,
          reposts: newRepostsRemoved
        }
      }
    case "SINGLESOUND_REPOST":
      const newReposts = state.sound ? [...state.sound.reposts, action.payload.toString()] : null;

      
      return {
        ...state,
        sound: {
          ...state.sound,
          reposts: newReposts
        }
      }
    
    case "SINGLESOUND_UPDATE_DESC":
      return {
        ...state,
        sound: {
            ...state.sound,
            description: action.payload
        }
      }
    case SET_SINGLESOUND:
      return {
        ...initState,
        sound: action.payload
      }
    default: 
          return state
  }
}

export default soundpageReducer;