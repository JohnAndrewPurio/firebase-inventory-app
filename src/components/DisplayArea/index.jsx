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
    }, [currentTab, listData])

    return (
        <Grid container>
            {
                listData.map( (data, index) => (
                    <Grid key={index} item xs={4}>
                        <Card data={data} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
