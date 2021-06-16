import { Paper, Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles' 

export default function Card({data}) {
    const classes = useStyles()
    const { name, price, imageUrl, description} = data


    return (
        <Paper elevation={3} className={classes.root} >
            <Grid container>
                <img className={classes.image} src={imageUrl} alt={name} />
            </Grid>
            <Grid container>
                <Typography>{name}</Typography>
            </Grid>
            <Grid container>
                <Typography>{price}</Typography>
            </Grid>
            <Grid container>
                <Typography>{description}</Typography>
            </Grid>
        </Paper>
    )
}
