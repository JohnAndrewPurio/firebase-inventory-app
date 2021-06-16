import { LOG_IN_USER, TOGGLE_CURRENT_TAB, STORE_DATA_FROM_DB, TOGGLE_ADD_NEW_GADGET } from './action_types'
import '../config'
import firebase from 'firebase'

const firestore = firebase.firestore()
const collectionName = 'gadgets-inventory'
const documents = ['mobiles','laptops', 'appliances']

export const toggleAddNewGadget = (payload) => ({
    type: TOGGLE_ADD_NEW_GADGET,
    payload: payload
})

export const logInUser = (payload) => ({
    type: LOG_IN_USER,
    payload: payload
})

export const toggleCurrentTab = (payload) => ({
    type: TOGGLE_CURRENT_TAB,
    payload: payload
})

export const storeDataFromDB = (payload) => ({
    type: STORE_DATA_FROM_DB,
    payload: payload
})

export const fetchData = () => {
    const firestoreDB = firestore

    return async (dispatch, getState) => {
        const { currentTabIndex } = getState()

        try {
            const snapshot = await firestoreDB.collection(collectionName).doc( documents[currentTabIndex - 1] ).get()
            const data = Object.values( snapshot.data() )

            dispatch( storeDataFromDB(data) )
        } catch (e) {
            console.log(e)
        }
    }
}

export const addNewDeviceToDB = (data) => {
    const firestoreDB = firestore
    console.log(data)

    return async (dispatch, getState) => {
        const { currentTabIndex } = getState()

        if(currentTabIndex === 0) return //Modify later

        try {
            const dbRef = firestoreDB.collection(collectionName).doc( documents[currentTabIndex - 1] )

            const addData = await dbRef.set(data, { merge: true })

            console.log(addData, currentTabIndex, collectionName)
        } catch (error) {
            console.log(error)
        }
    }
}