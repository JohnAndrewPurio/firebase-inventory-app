import './App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignIn from './components/SignIn'
import firebase from 'firebase'
import { Switch, Route, useHistory } from 'react-router-dom'
import { logInUser } from './redux/actions'
import Home from './components/Home'

export default function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const logInHandler = (user) => {
    console.log(firebase.auth().currentUser)
    dispatch(logInUser(user))
  }

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(logInHandler)

    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  useEffect(() => {
    if(user) {
      history.push('/home')

      return
    }

    history.push('/')
  }, [user])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  )
}