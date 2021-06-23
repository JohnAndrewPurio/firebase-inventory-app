import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    appBar: {
        bottom: 0,
    },
    button: {
        margin: theme.spacing(1),
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}))