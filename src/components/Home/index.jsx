import NavBar from '../NavBar'
import ApplicationBar from '../ApplicationBar'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Home() {
    const history = useHistory()
    const user = useSelector(state => state.user)

    const logOutHandler = () => {
        firebase.auth().signOut()
        history.push('/')
    }

    if(!user) 
        return <Redirect to="/" />

    return (
        <div>
            <NavBar />
            <h1>My App</h1>
            <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            <Button onClick={logOutHandler} variant="contained" >Sign-out</Button>
            <ApplicationBar />
        </div>
    )
}
