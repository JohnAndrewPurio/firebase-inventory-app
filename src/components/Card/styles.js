import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles( (theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(3),
    },
    image: {
        height: '15vmin',
        width: '100%',
        objectFit: 'cover'
    }
}))