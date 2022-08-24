import { CLOSE_SIDEDRAWER, TOGGLE_SIDEDRAWER } from "../../actions/actionTypes"

const initialState = {
  open: false,
  authModalOpen: false
}


const sideDrawerReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_SIDEDRAWER:
        return {
          ...state,
          open: !state.open
        }
      case CLOSE_SIDEDRAWER:
        return {
          ...state,
          open: false
        }
      case 'OPEN_AUTH_MODAL':
        return {
          ...state,
          authModalOpen: true
        }
      case 'CLOSE_AUTH_MODAL':
          return {
          ...state,
          authModalOpen: false
      }
    
        
      default: 
            return state
    }
  }

export default sideDrawerReducer;