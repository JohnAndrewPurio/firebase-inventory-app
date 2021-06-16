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
        const { currentTabIndex, listData } = getState()

        try {
            const snapshot = await firestoreDB.collection(collectionName).doc( documents[currentTabIndex - 1] ).get()
            let data = Object.values( snapshot.data() ).sort( (a, b) => a.name - b.name )

            if(listData.length === data.length) 
                return

            data = data.map( ele => {
                console.log(ele)

                if(!(ele.quantity))
                    ele.quantity = 1

                return ele
            })

            dispatch( storeDataFromDB(data) )
        } catch (e) {
            console.log(e)
        }
    }
}

export const addNewDeviceToDB = (data) => {
    const firestoreDB = firestore

    return async (dispatch, getState) => {
        const { currentTabIndex } = getState()

        if(currentTabIndex === 0) return //Modify later

        try {
            const dbRef = firestoreDB.collection(collectionName).doc( documents[currentTabIndex - 1] )
            await dbRef.set(data, { merge: true })

            dispatch( fetchData() )
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteDeviceFromDB = (data) => {
    return async (dispatch, getState) => {
        
    }
}