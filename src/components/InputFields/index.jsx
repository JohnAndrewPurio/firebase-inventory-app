import { useRef } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { addNewDeviceToDB, toggleAddNewGadget } from '../../redux/actions'

export default function InputFields() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const name = useRef()
    const price = useRef()
    const imageURL = useRef()
    const description = useRef()

    const buttonHandler = () => {
        const result = {}
        const data = {
            name: name.current.value,
            price: price.current.value,
            imageUrl: imageURL.current.value,
            description: description.current.value,
        }
        
        name.current.value = ''
        price.current.value = ''
        imageURL.current.value = ''
        description.current.value = ''

        result[data.name] = data

        dispatch( addNewDeviceToDB(result) )
        dispatch( toggleAddNewGadget(false) )
    }

    return (
        <Grid container className={classes.root} spacing={2} >
            <Grid item xs={12}>
                <Grid container>
                    <TextField
                        inputRef={name}
                        fullWidth
                        className={classes.input}
                        id="name"
                        label="Device Name"
                        variant="outlined"
                        color="primary"
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container >
                    <Grid item xs={3}>
                        <TextField
                            inputRef={price}
                            id="price"
                            className={classes.input}
                            label="Price"
                            variant="outlined"
                            color="primary"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            inputRef={imageURL}
                            id="imageUrl"
                            fullWidth
                            className={classes.input}
                            label="Image Source (URL)"
                            variant="outlined"
                            color="primary"
                        />
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={12}>
                <Grid container justify="center" >
                    <TextField
                        inputRef={description}
                        fullWidth
                        className={classes.input}
                        id="description"
                        label="Description"
                        variant="outlined"
                        color="primary"
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justify="center"  >
                    <Button
                        onClick={buttonHandler}
                        variant="contained"
                        color="primary"
                    >
                        Add New Device
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
