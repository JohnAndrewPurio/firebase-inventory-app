import { LOG_IN_USER, TOGGLE_CURRENT_TAB, STORE_DATA_FROM_DB, TOGGLE_ADD_NEW_GADGET } from './action_types'

const initState = {
    user: null,
    listData: [],
    addNewGadget: false,
    
    currentTabIndex: 1
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[LOG_IN_USER] = logInUser
    selector[TOGGLE_CURRENT_TAB] = toggleCurrentTab
    selector[STORE_DATA_FROM_DB] = storeDataFromDB
    selector[TOGGLE_ADD_NEW_GADGET] = addNewGadget

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function addNewGadget(state, payload) {
    return {...state, addNewGadget: payload}
}

function logInUser(state, payload) {
    return {...state, user: payload}
}

function toggleCurrentTab(state, payload) {
    return {...state, currentTabIndex: payload}
}

function storeDataFromDB(state, payload) {
    return {...state, listData: payload}
}