import { useStyles } from './styles'
import { AppBar, Toolbar, IconButton, Fab  } from '@material-ui/core'
import { Menu, Add, Search, More } from '@material-ui/icons'

export default function ApplicationBar() {
    const classes = useStyles()

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer">
                    <Menu />
                </IconButton>
                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <Add />
                </Fab>
                <div className={classes.grow} />
                <IconButton color="inherit">
                    <Search />
                </IconButton>
                <IconButton edge="end" color="inherit">
                    <More />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
