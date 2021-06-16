import { useStyles } from './styles'
import { AppBar, Button, Toolbar, IconButton, Fab, Typography } from '@material-ui/core'
import { Add, Search, ExitToApp } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { toggleAddNewGadget } from '../../redux/actions'

export default function ApplicationBar() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const classes = useStyles()
    const history = useHistory()

    const logOutHandler = () => {
        firebase.auth().signOut()
        history.push('/')
    }

    const addNewGadgetHandler = () => {
        dispatch( toggleAddNewGadget(true) )
    }

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <Typography edge="start" color="inherit" >
                    {user.displayName}
                </Typography>
                <Fab
                    color="secondary"
                    aria-label="add"
                    className={classes.fabButton}
                    onClick={addNewGadgetHandler}
                >
                    <Add />
                </Fab>
                <div className={classes.grow} />
                <IconButton color="inherit">
                    <Search />
                </IconButton>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<ExitToApp />}
                    onClick={logOutHandler}
                >
                    Log Out
                </Button>
            </Toolbar>
        </AppBar>
    )
}
