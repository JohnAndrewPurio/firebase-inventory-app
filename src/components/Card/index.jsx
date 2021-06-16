import { useState } from 'react'
import { Divider, IconButton, Paper, Grid, Typography } from '@material-ui/core'
import { Add, Remove, DeleteForever, ShoppingCart } from '@material-ui/icons'
import { StyledBadge, useStyles } from './styles'

export default function Card({ data }) {
    const classes = useStyles()
    const [showDelete, setShowDelete] = useState(false)
    const { name, price, imageUrl, description, quantity } = data

    const showDeleteButton = () => {
        setShowDelete(prev => !prev)
    }

    return (
        <Paper
            elevation={3}
            className={classes.root}
            onMouseEnter={showDeleteButton}
            onMouseLeave={showDeleteButton}
        >
            <Grid container>
                <Grid className={classes.badgeContainer} item xs={12} align="right" >
                    <IconButton aria-label="cart" disabled>
                        <StyledBadge badgeContent={quantity} color="secondary">
                            <ShoppingCart />
                        </StyledBadge>
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <img className={classes.image} src={imageUrl} alt={name} />
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" className={classes.centered} >{name}</Typography>
                    <Divider />
                </Grid>
                <Grid item align="center" xs={12}>
                    <Typography>$ {price}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.centered} >{description ? description : 'No available description'}</Typography>
                </Grid>
                <Grid className={classes.bottom} item xs={12} style={{ visibility: showDelete ? 'visible' : 'hidden' }}>
                    <IconButton
                        color="primary"
                    >
                        <Add />
                    </IconButton>
                    <IconButton
                        color="primary"
                    >
                        <Remove />
                    </IconButton>
                    <IconButton
                        className={classes.fab}
                        color="secondary"
                    >
                        <DeleteForever />
                    </IconButton>
                </Grid>
            </Grid>

        </Paper>
    )
}
