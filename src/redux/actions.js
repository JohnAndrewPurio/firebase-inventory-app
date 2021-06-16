import { LOG_IN_USER, TOGGLE_CURRENT_TAB } from './action_types'

export const logInUser = (payload) => ({
    type: LOG_IN_USER,
    payload: payload
})

export const toggleCurrentTab = (payload) => ({
    type: TOGGLE_CURRENT_TAB,
    payload: payload
})