import { CssBaseline } from '@material-ui/core'
import NavBar from '../NavBar'
import ApplicationBar from '../ApplicationBar'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AddNewItem from '../AddNewItem'
import DisplayArea from '../DisplayArea'

export default function Home() {
    const user = useSelector(state => state.user)

    if(!user) 
        return <Redirect to="/" />

    return (
        <div>
            <CssBaseline />
            <NavBar />
            <AddNewItem />
            <DisplayArea />
            <ApplicationBar />
        </div>
    )
}
