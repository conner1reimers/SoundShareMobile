import * as actionTypes from "./actionTypes";


export const startAction = (name, params) => {
    return {
        type: actionTypes.START_ACTION,
        payload: {
            action: {
                name,
                params
            }
        }
    }
}

export const stopAction = (name) => {
    return {
        type: actionTypes.STOP_ACTION,
        payload: { name }
    }
}

export const refreshActionStart = (refreshAction) => {
    return {
        type: actionTypes.REFRESH_ACTION_START,
        payload: { refreshAction }
    }
}

export const refreshActionStop = (refreshAction) => {
    return {
        type: actionTypes.REFRESH_ACTION_STOP,
        payload: { refreshAction }
    }
}

export const toggleSidedrawer = () => {
    return {
        type: actionTypes.TOGGLE_SIDEDRAWER,
    }
}

export const closeSideDrawer = () => {
    return {
        type: actionTypes.CLOSE_SIDEDRAWER,
    }
}

export const setScroll = (scroll) => {
    return {
        type: actionTypes.SET_SCROLL,
        payload: {
            x: scroll.x,
            y: scroll.y
        }
    }
}