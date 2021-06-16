import { Badge, makeStyles, withStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            boxShadow: '0 0 1vmin',
            transform: 'scale(1.05)'
        },
        padding: theme.spacing(2),
        margin: theme.spacing(3),
        height: '50vmin',
        position: 'relative'
    },
    image: {
        height: '15vmin',
        width: '100%',
        objectFit: 'contain'
    },
    centered: {
        textAlign: 'center',
        padding: theme.spacing(1)
    },
    fab: {
        position: 'absolute',
        right: theme.spacing(3)
    },
    badgeContainer: {
        position: 'absolute',
        width: '95%'
    },
    bottom: {
        position: 'absolute',
        bottom: theme.spacing(2),
        width: '95%',
    }
}))

export const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      position: 'absolute'
    },
  }))(Badge);