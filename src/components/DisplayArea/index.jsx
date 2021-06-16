import { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/actions'
import Card from '../Card'

export default function DisplayArea() {
    const dispatch = useDispatch()
    const currentTab = useSelector(state => state.currentTabIndex)
    const listData = useSelector(state => state.listData)

    useEffect(() => {
        if(currentTab)
            dispatch( fetchData() )

        // eslint-disable-next-line
    }, [currentTab])

    console.log(currentTab)

    return (
        <Grid container>
            {
                listData.map( (data, index) => (
                    <Grid item xs={4}>
                        <Card key={index} data={data} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
