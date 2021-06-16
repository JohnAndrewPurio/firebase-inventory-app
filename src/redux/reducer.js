import { LOG_IN_USER, TOGGLE_CURRENT_TAB } from './action_types'

const initState = {
    user: null,
    
    currentTabIndex: 0
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[LOG_IN_USER] = logInUser
    selector[TOGGLE_CURRENT_TAB] = toggleCurrentTab

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function logInUser(state, payload) {
    return {...state, user: payload}
}

function toggleCurrentTab(state, payload) {
    return {...state, currentTabIndex: payload}
}